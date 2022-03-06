import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  it("should render TodoMatic title", () => {
    render(<App />);
    const todoTitle = screen.getByText(/welcome to todomatic/i);
    expect(todoTitle).toBeInTheDocument();
  });

  it("should add a todo when form is submitted", () => {
    render(<App />);
    const formInput = screen.getByPlaceholderText(/enter a todo/i);
    const saveButton = screen.getByText(/add todo/i);

    userEvent.type(formInput, "Make Cake");

    userEvent.click(saveButton);

    const todoListItems = screen.getAllByRole("listitem");

    expect(todoListItems.length).toBe(1);
    expect(todoListItems[0].textContent).toBe("Make Cake");
  });

  it("should clear input when form is submitted", () => {
    render(<App />);
    const formInput = screen.getByPlaceholderText(/enter a todo/i);
    const saveButton = screen.getByText(/add todo/i);
    userEvent.type(formInput, "Make Cake");
    userEvent.click(saveButton);

    expect(screen.queryByDisplayValue("Make Cake")).toBeFalsy();
  });

  it("should not add todo when a empty input is submitted", () => {
    render(<App />);
    const formInput = screen.getByPlaceholderText(/enter a todo/i);
    const saveButton = screen.getByText(/add todo/i);
    userEvent.type(formInput, "     ");
    userEvent.click(saveButton);
    const todoListItems = screen.queryAllByRole("listitem");
    expect(todoListItems.length).toBe(0);
  });

  it("should check and uncheck todo when clicked", () => {
    render(<App />);
    const formInput = screen.getByPlaceholderText(/enter a todo/i);
    const saveButton = screen.getByText(/add todo/i);
    userEvent.type(formInput, "Make Cake");
    userEvent.click(saveButton);

    const todoCheckbox = screen.getByLabelText(/make cake/i);
    expect(todoCheckbox.checked).toBeFalsy();
    userEvent.click(todoCheckbox);
    expect(todoCheckbox.checked).toBeTruthy();
  });
});
