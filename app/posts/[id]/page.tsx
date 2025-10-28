import { notFound } from 'next/navigation';
import Link from 'next/link';
import { posts } from '../../data/posts';

interface PostPageProps {
    params: {
        id: string;
    };
}

export default function PostPage({ params }: PostPageProps) {
    const post = posts.find(p => p.id === params.id);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
            <div className="max-w-3xl mx-auto px-4">
                {/* Кнопка назад */}
                <div className="mb-6">
                    <Link
                        href="/posts"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                        ← Назад к всем постам
                    </Link>
                </div>

                {/* Заголовок поста */}
                <article className="bg-white rounded-xl shadow-lg p-8">
                    {/* Мета-информация */}
                    <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-500">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
              {post.category}
            </span>
                        <span>Автор: {post.author}</span>
                        <span>•</span>
                        <time>{post.createdAt.toLocaleDateString('ru-RU', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}</time>
                        <span>•</span>
                        <span>{post.readTime} мин чтения</span>
                    </div>

                    {/* Заголовок */}
                    <h1 className="text-4xl font-bold text-gray-800 mb-6">
                        {post.title}
                    </h1>

                    {/* Краткое описание */}
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        {post.excerpt}
                    </p>

                    {/* Контент поста */}
                    <div
                        className="prose prose-lg max-w-none"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Разделитель */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <div className="flex flex-wrap gap-4 justify-between items-center">
                            <Link
                                href="/posts"
                                className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                            >
                                ← Все посты
                            </Link>

                            <div className="text-sm text-gray-500">
                                Опубликовано: {post.createdAt.toLocaleDateString('ru-RU')}
                            </div>
                        </div>
                    </div>
                </article>

                {/* Навигация между постами */}
                <PostNavigation currentPostId={post.id} />
            </div>
        </div>
    );
}

// Компонент навигации между постами
function PostNavigation({ currentPostId }: { currentPostId: string }) {
    const currentIndex = posts.findIndex(p => p.id === currentPostId);
    const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
    const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

    return (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {prevPost && (
                <Link
                    href={`/posts/${prevPost.id}`}
                    className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
                >
                    <span className="text-sm text-gray-500">Предыдущий пост</span>
                    <h3 className="font-semibold text-gray-800 mt-1">
                        {prevPost.title}
                    </h3>
                </Link>
            )}

            {nextPost && (
                <Link
                    href={`/posts/${nextPost.id}`}
                    className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-right"
                >
                    <span className="text-sm text-gray-500">Следующий пост</span>
                    <h3 className="font-semibold text-gray-800 mt-1">
                        {nextPost.title}
                    </h3>
                </Link>
            )}
        </div>
    );
}

// Генерация статических параметров для SSG
export async function generateStaticParams() {
    return posts.map((post) => ({
        id: post.id,
    }));
}

// Метаданные для SEO
export async function generateMetadata({ params }: PostPageProps) {
    const post = posts.find(p => p.id === params.id);

    if (!post) {
        return {
            title: 'Пост не найден',
        };
    }

    return {
        title: `${post.title} | Мой Блог`,
        description: post.excerpt,
    };
}