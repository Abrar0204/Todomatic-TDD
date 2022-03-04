import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  it("should render TodoMatic title", () => {
    render(<App />);
    const todoTitle = screen.getByText(/welcome to todomatic/i);
    expect(todoTitle).toBeInTheDocument();
  });

  it("should render a empty list of todos intially", () => {
    render(<App />);
    const todoListItems = screen.queryAllByRole("listitem");

    expect(todoListItems.length).toBe(0);
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
});
