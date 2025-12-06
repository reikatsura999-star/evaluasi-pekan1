import React from 'react';
import styles from './TodoItem.module.css';

function TodoItem({ todo, onToggle, onDelete }) {
    return (
        <li className={styles.todoItem}>
            <div className={styles.todoContent} onClick={() => onToggle(todo.id)}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    readOnly
                    className={styles.checkbox}
                />
                <span className={`${styles.text} ${todo.completed ? styles.completed : ''}`}>
                    {todo.text}
                </span>
            </div>
            <button
                className={styles.deleteBtn}
                onClick={(e) => {
                    e.stopPropagation(); // Prevent toggling when clicking delete
                    onDelete(todo.id);
                }}
                aria-label="Delete todo"
            >
                ✕
            </button>
        </li>
    );
}

export default TodoItem;
