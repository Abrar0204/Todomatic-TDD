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
});
