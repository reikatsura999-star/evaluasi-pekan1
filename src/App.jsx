import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoFilter from './components/TodoFilter'
import './App.css'

function App() {
    const [todos, setTodos] = useState([])
    const [filter, setFilter] = useState('All')

    const addTodo = (text) => {
        setTodos([...todos, {
            id: Date.now(),
            text,
            completed: false
        }])
    }

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ))
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const getFilteredTodos = () => {
        switch (filter) {
            case 'Active':
                return todos.filter(todo => !todo.completed)
            case 'Completed':
                return todos.filter(todo => todo.completed)
            default:
                return todos
        }
    }

    return (
        <div className="app-container">
            <h1>📝 Todo List App</h1>
            <TodoForm onAdd={addTodo} />
            <TodoFilter currentFilter={filter} onFilterChange={setFilter} />
            <TodoList
                todos={getFilteredTodos()}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
            />
        </div>
    )
}

export default App
