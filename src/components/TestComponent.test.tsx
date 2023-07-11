import { render /*screen*/ } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TestComponent from "./TestComponent";

describe("Given the TestComponent", () => {
  describe("when it is rendered", () => {
    test("then it should render the TestComponent", () => {
      render(
        <BrowserRouter>
          <TestComponent />
        </BrowserRouter>
      );

      //      expect(screen.getByText("loading")).toBeInTheDocument();
      //expect(screen.getByRole("button")).toBeInTheDocument();
    });
  });
});

// const mockProducts: Product[] = [
//   {
//     product_id: "1",
//     name: "Product 1",
//     manufacturer: {
//       manufacturer_name: "Manufacturer 1",
//     },
//     main_category: {
//       category_name: "Category 1",

//       category_id: "",
//     },
//     has_stock: true,
//     recommended_prices: [
//       {
//         amount: 10,
//         currency: "€",
//       },
//     ],
//     updated_at: "2023-07-11",
//   },
// ];
