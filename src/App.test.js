import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render TodoMatic component", () => {
    render(<App />);
    const todoMatic = screen.getByTestId(/todomatic/i);
    expect(todoMatic).toBeInTheDocument();
  });
});
