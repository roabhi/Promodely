import { render, screen } from "@testing-library/react";
import Main from "./Main";
import FooterComponent from "./Footer";
import { Product } from "../types/Promofarma";

const mockProducts: Product[] = [
  {
    product_id: "1",
    name: "Product 1",
    manufacturer: {
      manufacturer_name: "Manufacturer 1",
    },
    main_category: {
      category_name: "Category 1",
      category_id: "",
    },
    has_stock: true,
    recommended_prices: [
      {
        amount: 10,
        currency: "€",
      },
    ],
    updated_at: "2023-07-11",
  },
];
describe("Given the nmain component", () => {
  describe("when it is rendered", () => {
    test("then it should render the main component", () => {
      render(<Main products={mockProducts} loading={false} />);
      expect(screen.getByText("Product 1")).toBeInTheDocument();
    });
  });
});

describe("Given the footerComponent", () => {
  describe("when it is rendered", () => {
    test("then it should render the footerComponent", () => {
      render(<FooterComponent />);

      expect(
        screen.getByText("©Promofarma 2023. Casi todos los derechos reservados")
      ).toBeInTheDocument();
    });
  });
});
