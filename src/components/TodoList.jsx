import React from "react";

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
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              opacity: todo.completed ? 0.5 : 1,
            }}
          >
            {todo.text}
          </span>
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
