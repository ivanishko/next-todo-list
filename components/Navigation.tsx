'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Todo List' },
    { href: '/posts', label: 'Мои посты' },
    { href: '/about', label: 'О нас' },
    { href: '/counter', label: 'Counter' },
  ];

  return (
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-gray-800">
              Мое Приложение
            </Link>

            <div className="flex space-x-4">
              {links.map((link) => (
                  <Link
                      key={link.href}
                      href={link.href}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          pathname === link.href
                              ? 'bg-blue-100 text-blue-700'
                              : 'text-gray-600 hover:text-gray-900'
                      }`}
                  >
                    {link.label}
                  </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
  );
}