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

    const todoListItem = screen.getByText(/make cake/i);

    expect(todoListItem).toBeInTheDocument();

    expect(todoListItem.textContent).toBe("Make Cake");
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

  it("should delete todo when delete button is clicked", () => {
    render(<App />);
    const formInput = screen.getByPlaceholderText(/enter a todo/i);
    const saveButton = screen.getByText(/add todo/i);
    userEvent.type(formInput, "Make Cake");
    userEvent.click(saveButton);

    let todoListItems = screen.queryAllByRole("listitem");
    const todoItem = screen.getByText(/make cake/i);

    expect(todoListItems.length).toBe(1);
    expect(todoItem.textContent).toBe("Make Cake");

    const todoDeleteButton = screen.getByText(/delete/i);
    userEvent.click(todoDeleteButton);

    todoListItems = screen.queryAllByRole("listitem");

    expect(todoListItems.length).toBe(0);
    expect(todoItem).not.toBeInTheDocument();
  });

  it("should edit a todo", () => {
    render(<App />);
    const formInput = screen.getByPlaceholderText(/enter a todo/i);
    const saveButton = screen.getByText(/add todo/i);
    userEvent.type(formInput, "Make Cake");
    userEvent.click(saveButton);

    const todoEditButton = screen.getByText(/edit/i);

    userEvent.click(todoEditButton);
    const todoSaveButton = screen.getByText(/save/i);

    const todoEditInput = screen.getByDisplayValue("Make Cake");

    userEvent.clear(todoEditInput);
    userEvent.type(todoEditInput, "Bake Cake");

    userEvent.click(todoSaveButton);

    const todoCheckbox = screen.getByText(/bake cake/i);

    expect(todoCheckbox).toBeInTheDocument();
    expect(todoCheckbox.textContent).toBe("Bake Cake");
  });
});
