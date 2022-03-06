import React from "react";

const TodoItem = ({ todo, todoIndex, setTodos }) => {
  const checkOrUnCheckTodo = () => {
    const isCompleted = todo.isCompleted;
    setTodos((prevTodos) =>
      prevTodos.map((todo, index) => {
        if (todoIndex === index) {
          return { ...todo, isCompleted: !isCompleted };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <li>
      <label>
        <input
          type="checkbox"
          defaultChecked={todo.isCompleted}
          onChange={checkOrUnCheckTodo}
        />
        {todo.text}
      </label>
    </li>
  );
};

export default TodoItem;
