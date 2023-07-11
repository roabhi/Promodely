import { render, screen } from "@testing-library/react";
import Main from "./Main";
import App from "./../App";

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
    test("renders product information", () => {
      render(<Main products={mockProducts} loading={false} />);

      const productName = screen.getByText("Product 1");
      expect(productName).toBeInTheDocument();

      const productPrice = screen.getByText("10 €");
      expect(productPrice).toBeInTheDocument();
    });

    test("opens product overlay on click", () => {
      render(<Main products={mockProducts} loading={false} />);

      const productThumbnail = screen.getByText("Product 1");

      productThumbnail?.click();
    });

    test("renders app component", () => {
      render(<App />);
      const linkElement = screen.getByText(
        /Busca entre más de 150.000 productos/i
      );
      expect(linkElement).toBeInTheDocument();
    });
  });
});
