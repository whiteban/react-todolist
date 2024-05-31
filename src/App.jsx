import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Input />
      <TodoList />
    </>
  );
}

export default App;
