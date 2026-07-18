import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio", () => {
  render(<App />);
  expect(screen.getByText(/What I Do/i)).toBeInTheDocument();
});