import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Given the Hero component", () => {
  describe("when it is rendered", () => {
    test("then it should render the Hero component", () => {
      render(<Hero />);

      expect(
        screen.getByText(
          "Busca entre más de 150.000 productos de más de 7000 marcas"
        )
      ).toBeInTheDocument();
    });
  });
});
