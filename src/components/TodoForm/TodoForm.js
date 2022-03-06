import React, { useState } from "react";

const TodoForm = ({ setTodos }) => {
  const [inputs, setInputs] = useState({
    todoInput: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputs.todoInput.trim() === "") {
      return;
    }
    setTodos((prevInputs) => [
      ...prevInputs,
      { text: inputs.todoInput, isCompleted: false },
    ]);
    setInputs((prevInputs) => ({ ...prevInputs, todoInput: "" }));
  };

  return (
    <form id="todo-form" data-testid="todo-form" onSubmit={handleSubmit}>
      <input
        name="todoInput"
        placeholder="Enter a todo"
        value={inputs.todoInput}
        onChange={handleInput}
      />
      <button type="submit">Add todo</button>
    </form>
  );
};

export default TodoForm;
