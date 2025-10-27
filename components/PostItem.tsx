'use client';

interface PostItemProps {
    id: string;
    text: string;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export default function PostItem({
                                     id,
                                     text,
                                     onToggle,
                                     onDelete
                                 }: PostItemProps) {
    return (
        <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow mb-2">
            <div className="flex items-center space-x-3">
                <input
                    type="checkbox"
                    onChange={() => onToggle(id)}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
          {text}
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