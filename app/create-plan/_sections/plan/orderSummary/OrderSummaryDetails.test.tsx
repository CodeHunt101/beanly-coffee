import { render, screen } from "@testing-library/react";
import { useContext } from "react";
import OrderSummaryDetails from "./OrderSummaryDetails";
import { Step } from "@/app/_utils/types";

// Mock the PlanContext
const mockContextValue = {
  selectedOptions: {},
};

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(),
}));

describe("OrderSummaryDetails Component", () => {
  beforeEach(() => {
    (useContext as jest.Mock).mockReturnValue(mockContextValue);
  });

  describe("when selectedOptions are empty", () => {
    it("renders default values", () => {
      render(<OrderSummaryDetails />);
      const textElement = screen.getByText(/I drink my coffee/);
      expect(textElement).toBeInTheDocument();
    });
  });

  describe("when brewMethod is Capsule", () => {
    beforeEach(() => {
      (useContext as jest.Mock).mockReturnValue({
        selectedOptions: {
          [Step.BrewMethod]: "Capsule",
          [Step.BeanType]: "Single Origin",
          [Step.Size]: "500g",
          [Step.DeliveryFrequency]: "Every week",
        },
      });
    });

    it("does not render the grindOption", () => {
      render(<OrderSummaryDetails />);
      expect(screen.queryByText(/ground ala/)).not.toBeInTheDocument();
    });

    it("renders correct summary for Capsule", () => {
      render(<OrderSummaryDetails />);
      const textElement = screen.getByText(/Capsule/);
      expect(textElement).toBeInTheDocument();
    });
  });

  describe("when brewMethod is not Capsule", () => {
    beforeEach(() => {
      (useContext as jest.Mock).mockReturnValue({
        selectedOptions: {
          [Step.BrewMethod]: "Filter",
          [Step.BeanType]: "Blended",
          [Step.Size]: "250g",
          [Step.GrindOption]: "Wholebean",
          [Step.DeliveryFrequency]: "Every month",
        },
      });
    });

    it("renders the grindOption", () => {
      render(<OrderSummaryDetails />);
      const grindText = screen.getByText(/Wholebean/);
      expect(grindText).toBeInTheDocument();
    });

    it("renders correct summary for Filter", () => {
      render(<OrderSummaryDetails />);
      const textElement = screen.getByText(/Filter/);
      expect(textElement).toBeInTheDocument();
    });
  });
});
