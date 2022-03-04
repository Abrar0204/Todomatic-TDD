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
    setTodos((prevInputs) => [
      ...prevInputs,
      { text: inputs.todoInput, isCompleted: false },
    ]);
  };

  return (
    <form data-testid="todo-form" onSubmit={handleSubmit}>
      <input
        name="todoInput"
        placeholder="Enter a todo"
        value={inputs.todo}
        onChange={handleInput}
      />
      <button type="submit">Add todo</button>
    </form>
  );
};

export default TodoForm;
