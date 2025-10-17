'use client';

import { useState, useEffect } from 'react';
import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItem';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Загружаем задачи из localStorage при загрузке компонента
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // Сохраняем задачи в localStorage при каждом изменении
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);



  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos(
        todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Мой Todo List
          </h1>

          <TodoForm onAdd={addTodo} />

          <div className="mb-4">
            <p className="text-gray-600">
              Всего задач: {todos.length} | Выполнено: {completedCount}
            </p>
          </div>

          <div>
            {todos.length === 0 ? (
                <p className="text-center text-gray-500 py-4">
                  Пока нет задач. Добавьте первую!
                </p>
            ) : (
                todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                        onToggle={toggleTodo}
                        onDelete={deleteTodo}
                    />
                ))
            )}
          </div>
        </div>
      </div>
  );
}