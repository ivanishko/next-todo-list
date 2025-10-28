import Link from 'next/link';
import { posts } from '../data/posts';

export default function Posts() {
  return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 py-8">
        <div className="max-w-4xl mx-auto px-4">
          {/* Заголовок страницы */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Мои посты
            </h1>
            <p className="text-lg text-gray-600">
              Здесь собраны все мои мысли и заметки о разработке
            </p>
          </div>

          {/* Список постов */}
          <div className="space-y-6">
            {posts.map((post) => (
                <article
                    key={post.id}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex justify-between items-start mb-3">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                  {post.category}
                </span>
                    <span className="text-sm text-gray-500">
                  {post.readTime} мин чтения
                </span>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    <Link
                        href={`/posts/${post.id}`}
                        className="hover:text-blue-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-500">
                    {post.author}
                  </span>
                      <span className="text-sm text-gray-400">•</span>
                      <time className="text-sm text-gray-500">
                        {post.createdAt.toLocaleDateString('ru-RU')}
                      </time>
                    </div>

                    <Link
                        href={`/posts/${post.id}`}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      Читать далее
                    </Link>
                  </div>
                </article>
            ))}
          </div>

          {/* Статистика */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-lg shadow p-6 inline-block">
              <p className="text-gray-600">
                Всего постов: <span className="font-bold text-blue-600">{posts.length}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}