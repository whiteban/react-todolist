import React from "react";
import TodoListLogo from "../assets/LogoTodoList.jpg";
import "../App.css";

const Header = () => {
  return (
    <header className="header">
      <img src={TodoListLogo} alt="TodoList Logo" className="logo" />
      <h1>Ma To-Do List</h1>
    </header>
  );
};

export default Header;
