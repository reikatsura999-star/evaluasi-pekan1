import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onToggle, onDelete }) {
    if (todos.length === 0) {
        return (
            <div className="empty-state">
                <div className="empty-state-icon">📋</div>
                <p className="empty-state-text">Belum ada tugas. Yuk tambahkan sekarang!</p>
            </div>
        );
    }

    return (
        <div>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}

export default TodoList;
