'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Логотип */}
          <Link href="/" className="text-xl font-bold text-gray-800">
            Мое Приложение
          </Link>

          {/* Навигационные ссылки */}
          <div className="flex space-x-8">
            <Link 
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === '/' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Todo List
            </Link>
            <Link 
              href="/posts"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === '/posts' 
                  ? 'bg-purple-100 text-purple-700' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Мои посты
            </Link>
            <Link  href="/counter"
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === '/counter' 
                  ? 'bg-purple-100 text-purple-700' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >Counter</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}