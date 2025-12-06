import React, { useState } from 'react';

function TodoForm({ onAdd }) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim() === "") return;
        alert("di isi dulu ya guys!")
        onAdd(input);
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="✨ Tambahkan tugas baru..."
            />
            <button type="submit">
                ➕ Tambah
            </button>
        </form>
    );
}

export default TodoForm;
