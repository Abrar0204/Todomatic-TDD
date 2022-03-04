import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoForm from "./TodoForm";

describe("TodoForm", () => {
  it("should render a form with input and button", () => {
    render(<TodoForm />);
    const formInput = screen.getByPlaceholderText(/enter a todo/i);
    const saveButton = screen.getByText(/add todo/i);
    expect(formInput).toBeInTheDocument();
    expect(saveButton).toBeInTheDocument();
  });

  it("should call setTodos props when form is submitted", () => {
    const mockFunction = jest.fn();
    render(<TodoForm setTodos={mockFunction} />);
    const formInput = screen.getByPlaceholderText(/enter a todo/i);
    const saveButton = screen.getByText(/add todo/i);
    userEvent.type(formInput, "Make Cake");
    userEvent.click(saveButton);

    expect(mockFunction).toBeCalledTimes(1);
  });
});
