import React from "react";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todos, setTodos }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          todo={todo}
          todoIndex={index}
          setTodos={setTodos}
          key={index}
        />
      ))}
    </ul>
  );
};

export default TodoList;
