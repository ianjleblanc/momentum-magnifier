import React from "react";

export default function todoItem({ todo, toggleTodo }) {
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
        {todo.name}
      <button className="remove-todo-btn">X</button>
    </div>
  );
}
