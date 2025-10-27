'use client';

import { useState } from 'react';

interface PostFormProps {
    onAdd: (text: string) => void;
}

export default function PostForm({onAdd}: PostFormProps) {
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            onAdd(text.trim());
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6">
            <div className="flex space-x-2">
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Добавьте новый  пост..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Добавить
                </button>
            </div>
        </form>
    );
}