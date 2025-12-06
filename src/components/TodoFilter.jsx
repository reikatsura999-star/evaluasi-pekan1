import React from 'react';

function TodoFilter({ currentFilter, onFilterChange }) {
    const filters = ['All', 'Active', 'Completed'];

    return (
        <div className="todo-filter">
            {filters.map((filter) => (
                <button
                    key={filter}
                    onClick={() => onFilterChange(filter)}
                    className={`filter-btn ${currentFilter === filter ? 'active' : ''}`}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
}

export default TodoFilter;
