import TodoItem from "./TodoItem";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("TodoItem", () => {
  it("should call setTodos when todo is checked or unchecked", () => {
    const mockFunction = jest.fn();
    render(
      <TodoItem
        todo={{ text: "Make Cake", isCompleted: false }}
        setTodos={mockFunction}
        todoIndex={0}
      />
    );
    const todoCheckbox = screen.getByLabelText(/make cake/i);
    userEvent.click(todoCheckbox);
    expect(mockFunction).toBeCalled();
  });
});
