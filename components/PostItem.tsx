'use client';

import { Post } from '../types/post';

interface PostItemProps {
    post: Post;
    onDelete: (id: string) => void;
}

export default function PostItem({ post, onDelete }: PostItemProps) {
    const formatDate = (date: Date) => {
        return new Date(date).toLocaleDateString('ru-RU', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <article className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 mb-6 hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-800 pr-4">{post.title}</h2>
                <button
                    onClick={() => onDelete(post.id)}
                    className="text-red-500 hover:text-red-700 font-medium text-sm bg-red-50 px-3 py-1 rounded-lg transition-colors"
                >
                    Удалить
                </button>
            </div>

            <div className="prose prose-lg max-w-none mb-4">
                <p className="text-gray-700 whitespace-pre-wrap">{post.content}</p>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-gray-200">
        <span className="text-sm text-gray-500">
          {formatDate(post.createdAt)}
        </span>
                <span className="text-sm text-gray-500">
          {post.author || 'Анонимный автор'}
        </span>
            </div>
        </article>
    );
}