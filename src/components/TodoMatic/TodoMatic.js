import React, { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";

const TodoMatic = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div id="todo-container" data-testid="todomatic">
      <h1 className="todo-heading">Welcome to Todomatic</h1>
      <TodoForm setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default TodoMatic;
