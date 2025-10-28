import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                    Пост не найден
                </h2>
                <p className="text-gray-600 mb-8">
                    Извините, запрашиваемый пост не существует или был удален.
                </p>
                <Link
                    href="/posts"
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                    Вернуться к постам
                </Link>
            </div>
        </div>
    );
}