import React from "react";

export default function todoItem({ todo, toggleTodo, handleRemoveSingleTodo }) {

  function handleTodoClick() {
    toggleTodo(todo.id);
  }

  

  return (
    <div className="todo-item">
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleTodoClick}
        />
        {todo.name.toUpperCase()}
      <button onClick={handleRemoveSingleTodo} className="remove-todo-btn">X</button>
    </div>
  );
}
