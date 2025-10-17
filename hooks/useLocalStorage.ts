'use client';

import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
    // Получаем значение из localStorage или используем initialValue
    const [storedValue, setStoredValue] = useState<T>(() => {
        if (typeof window === 'undefined') {
            return initialValue;
        }

        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(`Ошибка чтения localStorage ключа "${key}":`, error);
            return initialValue;
        }
    });

    // Обновляем localStorage при изменении значения
    const setValue = (value: T | ((val: T) => T)) => {
        try {
            // Позволяем value быть функцией, чтобы работать как useState
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);

            if (typeof window !== 'undefined') {
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        } catch (error) {
            console.log(`Ошибка записи в localStorage ключа "${key}":`, error);
        }
    };

    return [storedValue, setValue] as const;
}