import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render TodoMatic title", () => {
    render(<App />);
    const todoTitle = screen.getByText(/welcome to todomatic/i);
    expect(todoTitle).toBeInTheDocument();
  });

  it("should render a empty list of todos intially", () => {
    render(<App />);
    const todoList = screen.getByRole("list");
    expect(todoList.children.length).toBe(0);
  });

  it("should render a form with input and button", () => {
    render(<App />);
    const formInput = screen.getByPlaceholderText(/enter a todo/i);
    const saveButton = screen.getByText(/add todo/i);
    expect(formInput).toBeInTheDocument();
    expect(saveButton).toBeInTheDocument();
  });
});
