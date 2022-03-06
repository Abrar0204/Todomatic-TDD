import React from "react";

const TodoList = ({ todos, setTodos }) => {
  const checkOrUnCheckTodo = (todoIndex) => {
    const isCompleted = todos[todoIndex].isCompleted;
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
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <label>
            <input
              type="checkbox"
              defaultChecked={todo.isCompleted}
              onChange={() => checkOrUnCheckTodo(index)}
            />
            {todo.text}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
