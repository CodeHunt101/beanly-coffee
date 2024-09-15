import { render, screen } from "@testing-library/react";
import OrderSummary from "./OrderSummary";
import OrderSummaryDetails from "./OrderSummaryDetails";
import Button from "@/components/buttons/Button";

// Mock OrderSummaryDetails and Button components
jest.mock("./OrderSummaryDetails");
jest.mock("@/components/buttons/Button");

describe("OrderSummary Component", () => {
  beforeEach(() => {
    (OrderSummaryDetails as jest.Mock).mockImplementation(() => (
      <div>OrderSummaryDetails</div>
    ));
    (Button as jest.Mock).mockImplementation(({ children }) => (
      <button>{children}</button>
    ));
  });

  describe("renders correctly", () => {
    it("renders the order summary heading", () => {
      render(<OrderSummary />);
      const headingElement = screen.getByRole("heading", {
        name: /Order Summary/i,
      });
      expect(headingElement).toBeInTheDocument();
    });

    it("renders the OrderSummaryDetails component", () => {
      render(<OrderSummary />);
      const detailsElement = screen.getByText("OrderSummaryDetails");
      expect(detailsElement).toBeInTheDocument();
    });

    it("renders the create plan button", () => {
      render(<OrderSummary />);
      const buttonElement = screen.getByRole("button", {
        name: /Create my plan!/i,
      });
      expect(buttonElement).toBeInTheDocument();
    });
  });
});
