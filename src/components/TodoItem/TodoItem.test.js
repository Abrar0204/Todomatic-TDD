import TodoItem from "./TodoItem";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("TodoItem", () => {
  it("should have a checkbox, delete and edit button", () => {
    render(<TodoItem todo={{ text: "Make Cake", isCompleted: false }} />);

    const todoCheckbox = screen.getByText(/make cake/i);
    const todoEditButton = screen.getByText(/edit/i);
    const todoDeleteButton = screen.getByText(/delete/i);

    expect(todoCheckbox.textContent).toBe("Make Cake");
    expect(todoEditButton.textContent).toBe("Edit");
    expect(todoDeleteButton.textContent).toBe("Delete");
  });

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

  it("should call setTodo function when delete is presses", () => {
    const mockFunction = jest.fn();
    render(
      <TodoItem
        todo={{ text: "Make Cake", isCompleted: false }}
        setTodos={mockFunction}
        todoIndex={0}
      />
    );
    const todoDeleteButton = screen.getByText(/delete/i);
    userEvent.click(todoDeleteButton);
    expect(mockFunction).toBeCalled();
  });

  it("should change checkbox to input and edit to save when edit button is clicked", () => {
    const mockFunction = jest.fn();
    render(
      <TodoItem
        todo={{ text: "Make Cake", isCompleted: false }}
        setTodos={mockFunction}
        todoIndex={0}
      />
    );

    const todoEditButton = screen.getByText(/edit/i);

    userEvent.click(todoEditButton);

    const todoSaveButton = screen.getByText(/save/i);

    expect(todoSaveButton).toBeInTheDocument();

    const todoEditInput = screen.getByDisplayValue(/make cake/i);

    expect(todoEditInput).toBeInTheDocument();
    expect(todoEditInput.value).toBe("Make Cake");
  });

  it("should call setTodo when todo is edited", () => {
    const mockFunction = jest.fn();
    render(
      <TodoItem
        todo={{ text: "Make Cake", isCompleted: false }}
        setTodos={mockFunction}
        todoIndex={0}
      />
    );

    const todoEditButton = screen.getByText(/edit/i);

    userEvent.click(todoEditButton);

    const todoSaveButton = screen.getByText(/save/i);

    userEvent.click(todoSaveButton);

    expect(mockFunction).toBeCalled();
  });
});
