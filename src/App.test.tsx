import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);

  const linkElement = screen.getByText(/Busca entre más de 150.000 productos/i);

  expect(linkElement).toBeInTheDocument();
});
