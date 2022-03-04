import { useState } from "react";
import TodoForm from "./components/TodoForm/TodoForm";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <h1>Welcome to Todomatic</h1>
      <TodoForm setTodos={setTodos} />
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
