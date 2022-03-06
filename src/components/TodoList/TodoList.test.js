import TodoList from "./TodoList";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("TodoList", () => {
  it("should render a empty list of todos when a empty array is passed", () => {
    render(<TodoList todos={[]} />);
    const todoListItems = screen.queryAllByRole("listitem");

    expect(todoListItems.length).toBe(0);
  });

  it("should render a list of todos when a todo array is passed", () => {
    render(<TodoList todos={[{ text: "Make Cake", isCompleted: false }]} />);
    const todoListItems = screen.queryAllByRole("listitem");
    expect(todoListItems.length).toBe(1);
    expect(todoListItems[0].textContent).toBe("Make Cake");
  });

  it("should call setTodos when todo is checked or unchecked", () => {
    const mockFunction = jest.fn();
    render(
      <TodoList
        todos={[{ text: "Make Cake", isCompleted: false }]}
        setTodos={mockFunction}
      />
    );
    const todoCheckbox = screen.getByLabelText(/make cake/i);
    userEvent.click(todoCheckbox);
    expect(mockFunction).toBeCalled();
  });
});
