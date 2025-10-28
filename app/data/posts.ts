import { Post } from '/types/post';

export const posts: Post[] = [
    {
        id: '1',
        title: 'Мой первый пост в блоге',
        excerpt: 'Это краткое описание моего первого поста, где я рассказываю о начале моего путешествия в веб-разработке.',
        content: `
      <h2>Введение в веб-разработку</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      <h3>Почему я выбрал Next.js?</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

      <blockquote>
        "Next.js предоставляет отличную производительность и удобство разработки."
      </blockquote>

      <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
    `,
        author: 'Иван Иванов',
        createdAt: new Date('2024-01-15'),
        category: 'Разработка',
        readTime: 5
    },
    {
        id: '2',
        title: 'Изучение React Hooks',
        excerpt: 'Глубокое погружение в React Hooks: useState, useEffect и кастомные хуки для эффективной разработки.',
        content: `
      <h2>Что такое React Hooks?</h2>
      <p>React Hooks - это функции, которые позволяют использовать состояние и другие возможности React без написания классов. Они были представлены в React 16.8 и с тех пор revolutionized разработку.</p>

      <h3>useState Hook</h3>
      <p>useState - это хук, который позволяет добавлять состояние React в функциональные компоненты. Он возвращает пару: текущее значение и функцию для его обновления.</p>

      <pre><code>const [count, setCount] = useState(0);</code></pre>

      <h3>useEffect Hook</h3>
      <p>useEffect позволяет выполнять побочные эффекты в функциональных компонентах. Он объединяет в себе componentDidMount, componentDidUpdate и componentWillUnmount.</p>

      <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</p>
    `,
        author: 'Петр Петров',
        createdAt: new Date('2024-01-12'),
        category: 'React',
        readTime: 8
    },
    {
        id: '3',
        title: 'TypeScript для начинающих',
        excerpt: 'Почему TypeScript становится стандартом в современной веб-разработке и как начать его использовать.',
        content: `
      <h2>Введение в TypeScript</h2>
      <p>TypeScript - это надмножество JavaScript, которое добавляет статическую типизацию. Это означает, что вы можете определять типы для переменных, функций и объектов.</p>

      <h3>Преимущества TypeScript</h3>
      <ul>
        <li>Раннее обнаружение ошибок</li>
        <li>Улучшенная поддержка IDE</li>
        <li>Лучшая документация кода</li>
        <li>Более надежный рефакторинг</li>
      </ul>

      <h3>Базовые типы</h3>
      <p>TypeScript предоставляет основные типы как number, string, boolean, array, tuple, enum, any, void, null, undefined, never и object.</p>

      <pre><code>let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";</code></pre>

      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
    `,
        author: 'Мария Сидорова',
        createdAt: new Date('2024-01-10'),
        category: 'TypeScript',
        readTime: 6
    }
];