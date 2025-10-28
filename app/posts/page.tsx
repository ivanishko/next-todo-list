'use client';

import { useState, useEffect } from 'react';
import PostForm from '../../components/PostForm';
import PostItem from '../../components/PostItem';
import { Post } from '../../types/post';

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);

  // Загрузка постов из localStorage
  useEffect(() => {
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      try {
        const parsedPosts = JSON.parse(storedPosts);
        const postsWithDates = parsedPosts.map((post: any) => ({
          ...post,
          createdAt: new Date(post.createdAt)
        }));
        setPosts(postsWithDates);
      } catch (error) {
        console.error('Ошибка загрузки постов:', error);
      }
    }
  }, []);

  // Сохранение постов в localStorage
  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  // Добавление нового поста
  const addPost = (title: string, content: string) => {
    const newPost: Post = {
      id: Date.now().toString(),
      title,
      content,
      createdAt: new Date(),
      author: 'Вы' // Можно добавить поле для имени автора
    };
    setPosts(prevPosts => [newPost, ...prevPosts]); // Новые посты сверху
  };

  // Удаление поста
  const deletePost = (id: string) => {
    setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
  };

  // Очистка всех постов
  const clearAllPosts = () => {
    setPosts([]);
  };

  return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 py-8">
        <div className="max-w-4xl mx-auto px-4">
          {/* Заголовок страницы */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Мой блог
            </h1>
            <p className="text-lg text-gray-600">
              Делитесь своими мыслями и идеями
            </p>
          </div>

          {/* Форма добавления поста */}
          <PostForm onAdd={addPost} />

          {/* Статистика и управление */}
          <div className="flex justify-between items-center mb-6 p-4 bg-white rounded-lg shadow">
            <div className="text-sm text-gray-600">
              <span className="font-medium">Всего постов: {posts.length}</span>
            </div>

            {posts.length > 0 && (
                <button
                    onClick={clearAllPosts}
                    className="px-4 py-2 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition-colors"
                >
                  Очистить все посты
                </button>
            )}
          </div>

          {/* Список постов */}
          <div>
            {posts.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-lg shadow">
                  <div className="text-gray-400 text-6xl mb-4">📝</div>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">
                    Пока нет постов
                  </h3>
                  <p className="text-gray-500">
                    Создайте свой первый пост используя форму выше!
                  </p>
                </div>
            ) : (
                <div>
                  {posts.map(post => (
                      <PostItem
                          key={post.id}
                          post={post}
                          onDelete={deletePost}
                      />
                  ))}
                </div>
            )}
          </div>

          {/* Демо контент (показываем только когда нет постов) */}
          {posts.length === 0 && (
              <div className="mt-8 bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Пример поста
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-4">
                    Вот как будут выглядеть ваши посты после публикации.
                    Вы можете добавлять заголовки, текст и даже указывать автора.
                  </p>

                  <p className="text-gray-700">
                    Попробуйте создать свой первый пост используя форму выше!
                    Вы сможете редактировать и удалять свои записи.
                  </p>
                </div>
              </div>
          )}
        </div>
      </div>
  );
}