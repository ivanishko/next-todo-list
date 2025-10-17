'use client';

interface TodoItemProps {
    id: string;
    text: string;
    completed: boolean;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export default function TodoItem({
                                     id,
                                     text,
                                     completed,
                                     onToggle,
                                     onDelete
                                 }: TodoItemProps) {
    return (
        <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow mb-2">
            <div className="flex items-center space-x-3">
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => onToggle(id)}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className={`${completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
          {text}
        </span>
            </div>
            <button
                onClick={() => onDelete(id)}
                className="button-delete text-red-500 hover:text-red-700 font-medium"
            >
                Удалить
            </button>
        </div>
    );
}