import React, { useState, useRef, useEffect } from "react";
import TodoList from "./momentum/TodoList";
import Header from "./Header";
import { v4 as uuidv4 } from "uuid";
import Footer from "./Footer";

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleClearCompleteTodos(e) {
    e.preventDefault();
    const newTodos = todos.filter(todo => !todo.complete);
    setTodos(newTodos);
  }

  function handleAddTodo(e) {
    e.preventDefault();
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodo) => {
      return [...prevTodo, { id: uuidv4(), name: name, complete: false }];
    });
    //clears out the input field
    todoNameRef.current.value = null;
  }

  return (
    <div>
      <Header />

      <div>
        <input ref={todoNameRef} type="text" />
        <button onClick={handleAddTodo}>Add</button>
        <button>Clear</button>
        {/* onClick return input field blank */}
      </div>
      <TodoList todos={todos} toggleCommit={toggleTodo} />
      <br />
      <div>
        {todos.filter((todo) => !todo.complete).length}left to do
      </div>
      <div>
        <button onClick={handleClearCompleteTodos}>Clear Completed</button>
        <button>Save All</button>
      </div>
      <br />
      <div className="quote d-flex justify-content-center">
      (Random positive quote generator)
      </div>
      <br />
      <Footer />
    </div>
  );
}

export default App;
