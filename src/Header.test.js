import { screen, render } from "@testing-library/react";
import Header from "./components/Header";

test("render hello world", () => {
  render(<Header title={"Hello World"} />);
  const headerElement = screen.getByText(/hello world/i);
  expect(headerElement).toBeInTheDocument;
});
