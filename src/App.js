import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

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
    <div className="App">
      <h1>Welcome to Todomatic</h1>
      <form data-testid="todo-form" onSubmit={handleSubmit}>
        <input
          name="todoInput"
          placeholder="Enter a todo"
          value={inputs.todo}
          onChange={handleInput}
        />
        <button type="submit">Add todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
