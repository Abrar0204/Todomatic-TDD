import React, { useState } from "react";

const TodoItem = ({ todo, todoIndex, setTodos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTodoInput, setEditTodoInput] = useState(todo.text);

  const handleInput = (e) => {
    setEditTodoInput(e.target.value);
  };

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

  const switchToEditTodoMode = () => {
    setIsEditing(true);
  };

  const editTodo = () => {
    if (editTodoInput.trim() === "") {
      return;
    }
    setTodos((prevTodos) =>
      prevTodos.map((todo, index) => {
        if (index === todoIndex) {
          return { ...todo, text: editTodoInput };
        } else {
          return todo;
        }
      })
    );

    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <input type="text" value={editTodoInput} onChange={handleInput} />
      ) : (
        <label>
          <input
            type="checkbox"
            defaultChecked={todo.isCompleted}
            onChange={checkOrUnCheckTodo}
          />
          {todo.text}
        </label>
      )}
      <div className="button-group">
        {isEditing ? (
          <button onClick={editTodo}>Save</button>
        ) : (
          <button onClick={switchToEditTodoMode}>Edit</button>
        )}
        <button className="delete-button" onClick={deleteTodo}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
