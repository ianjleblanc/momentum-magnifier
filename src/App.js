import React, { useState, useRef, useEffect } from "react";
import TodoList from "./todo/TodoList";
import Header from "./Header";
import { v4 as uuidv4 } from "uuid";
import Footer from "./Footer";
import "./App.css";

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

  function handleClearInputField() {
    todoNameRef.current.value = null
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
    <div className="App">
      <Header />

      <div>
        <label htmlFor="todo">
          <input ref={todoNameRef} type="text" id="todo" />
        </label>
        
        <button onClick={handleAddTodo}>Add</button>
        <button onClick={handleClearInputField}>Clear</button>
        {/* onClick return input field blank */}
      </div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      
      <div>
        {todos.filter((todo) => !todo.complete).length}left to do
      </div>
      <div>
        <button onClick={handleClearCompleteTodos}>Clear Completed</button>
        <button>Save All</button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
