import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders input field and add button", () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText("Add a new todo");
  const addButton = screen.getByText("Add");

  expect(inputElement).toBeInTheDocument();
  expect(addButton).toBeInTheDocument();
});
