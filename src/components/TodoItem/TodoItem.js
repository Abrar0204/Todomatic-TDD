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

  const deleteTodo = () => {
    setTodos((prevTodos) =>
      prevTodos.filter((_, index) => todoIndex !== index)
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
      <div>
        <button>Edit</button>
        <button onClick={deleteTodo}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
