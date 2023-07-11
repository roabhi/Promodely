import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("given a Navbar component", () => {
  describe("when it is rendered", () => {
    test("then 'Home' should be in the document", () => {
      render(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      );

      const imageElement = screen.getByAltText("logo");
      expect(imageElement).toBeInTheDocument();
    });
  });
});
