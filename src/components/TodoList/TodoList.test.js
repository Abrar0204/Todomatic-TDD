import TodoList from "./TodoList";
import { render, screen } from "@testing-library/react";

describe("TodoList", () => {
  it("should render a empty list of todos when a empty array is passed", () => {
    render(<TodoList todos={[]} />);
    const todoListItems = screen.queryAllByRole("listitem");

    expect(todoListItems.length).toBe(0);
  });

  it("should render a list of todos when a todo array is passed", () => {
    render(<TodoList todos={[{ text: "Make Cake", isCompleted: false }]} />);
    const todoListItem = screen.getByText(/make cake/i);
    expect(todoListItem.textContent).toBe("Make Cake");
  });
});
