import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render TodoMatic title", () => {
    render(<App />);
    expect(screen.getByText(/welcome to todomatic/i)).toBeInTheDocument();
  });
});
