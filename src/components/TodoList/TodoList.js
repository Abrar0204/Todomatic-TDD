import React from "react";

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <label>
            <input type="checkbox" defaultChecked={todo.isCompleted} />
            {todo.text}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
