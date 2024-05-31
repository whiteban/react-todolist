import React, { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoText) => {
    const newTodo = { text: todoText, completed: false };
    setTodos((prev) => [...prev, newTodo]);
  };

  const deleteTodo = (index) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };

  const toggleTodo = (index) => {
    setTodos((prev) =>
      prev.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const todoText = event.target.elements.todo.value;
    addTodo(todoText);
    event.target.reset();
  };

  const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
    return (
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? "completed" : ""}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(index)}
            />
            <span>{todo.text}</span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="app-wrapper">
      <Header />
      <form className="form-wrapper" onSubmit={onSubmit}>
        <input
          id="todo"
          className="input"
          type="text"
          placeholder="Add a task"
          name="todo"
        />
        <button type="submit">Submit</button>
      </form>
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
