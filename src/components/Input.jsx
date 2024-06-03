import React from "react";

const Input = ({ todos, setTodos }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const todoText = event.target.elements.todo.value;
    const newTodo = { text: todoText, completed: false };
    setTodos((prev) => [...prev, newTodo]);
    event.target.reset();
  };

  return (
    <form className="form-wrapper" onSubmit={handleSubmit}>
      <input
        id="todo"
        className="input"
        type="text"
        placeholder="Add a task"
        name="todo"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Input;
