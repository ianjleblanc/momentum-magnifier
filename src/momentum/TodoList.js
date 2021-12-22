import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todos, toggleTodo}) {
    return (
        
        todos.map(todo => {
            return <TodoItem key={todo.id} toggleTodo={toggleTodo} todo={todo} />
        })
    )
}
