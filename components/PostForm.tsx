'use client';

import { useState } from 'react';
import { Post } from '../types/post';

interface PostFormProps {
    onAdd: (title: string, content: string) => void;
}

export default function PostForm({ onAdd }: PostFormProps) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title.trim() && content.trim()) {
            onAdd(title.trim(), content.trim());
            setTitle('');
            setContent('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-8 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Создать новый пост</h3>

            <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                    Заголовок поста
                </label>
                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Введите заголовок..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                    Текст поста
                </label>
                <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Напишите ваш пост..."
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-vertical"
                />
            </div>

            <div className="flex justify-end">
                <button
                    type="submit"
                    disabled={!title.trim() || !content.trim()}
                    className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                    Опубликовать
                </button>
            </div>
        </form>
    );
}