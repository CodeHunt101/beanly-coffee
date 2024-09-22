import { render, screen, fireEvent } from "@testing-library/react";
import { PlanContext } from "@/app/_context/planContext";
import OrderSummaryModal from "./OrderSummaryModal";
import { calculatePrice } from "../helpers/utils";
import { SelectedOptions, Step } from "@/app/_utils/types";

jest.mock("../helpers/utils", () => ({
  calculatePrice: jest.fn(),
}));

jest.mock("@/components/modal/Modal", () => (props: any) => (
  <div data-testid="modal">{props.children}</div>
));

jest.mock("./Price", () => (props: any) => (
  <span data-testid="price">Price: {props.priceValue}</span>
));

jest.mock("@/components/buttons/Button", () => (props: any) => (
  <button data-testid="button" onClick={props.onClick}>
    {props.children}
  </button>
));

jest.mock("./OrderSummaryDetails", () => () => (
  <div data-testid="order-summary-details">OrderSummaryDetails</div>
));

const setSelectedOption = jest.fn();
const openModal = jest.fn();

describe("OrderSummaryModal", () => {
  const mockSelectedOptions: Partial<SelectedOptions> = {
    [Step.BrewMethod]: "Filter",
    [Step.BeanType]: "Single Origin",
    [Step.Size]: "250g",
    [Step.DeliveryFrequency]: "Every week",
    [Step.GrindOption]: "Wholebean",
  };

  const renderComponent = (isModalOpen: boolean) =>
    render(
      <PlanContext.Provider
        value={{
          selectedOptions: mockSelectedOptions,
          setSelectedOption,
          isModalOpen,
          openModal,
        }}
      >
        <OrderSummaryModal />
      </PlanContext.Provider>,
    );

  describe("Modal functionality", () => {
    it("renders the Modal when isOpen is true", () => {
      renderComponent(true);
      expect(screen.getByTestId("modal")).toBeInTheDocument();
    });
  });

  describe("Context usage", () => {
    it("uses the selectedOptions from PlanContext", () => {
      renderComponent(true);
      expect(calculatePrice).toHaveBeenCalledWith(mockSelectedOptions);
    });
  });

  describe("Price calculation and display", () => {
    it("displays the calculated price", () => {
      (calculatePrice as jest.Mock).mockReturnValue(19.99);
      renderComponent(true);
      expect(screen.queryAllByText("Price: 19.99")[1]).toBeInTheDocument();
    });
  });

  describe("Button interactions", () => {
    it("calls onClose when the Close button is clicked", () => {
      renderComponent(true);
      fireEvent.click(screen.getByTestId("button"));
      expect(openModal).toHaveBeenCalledWith(false);
    });
  });

  describe("Content rendering", () => {
    beforeEach(() => {
      renderComponent(true);
    });

    it("renders the Order Summary title", () => {
      expect(screen.getByText("Order Summary")).toBeInTheDocument();
    });

    it("renders the OrderSummaryDetails component", () => {
      expect(screen.getByTestId("order-summary-details")).toBeInTheDocument();
    });

    it("renders the descriptive text", () => {
      expect(screen.getByText(/Is this correct\?/)).toBeInTheDocument();
    });

    it("renders the proceed to checkout text", () => {
      expect(
        screen.getByText(/You can proceed to checkout/),
      ).toBeInTheDocument();
    });
  });

  describe("Styling", () => {
    beforeEach(() => {
      renderComponent(true);
    });

    it("applies the correct CSS classes for the title", () => {
      expect(screen.getByText("Order Summary").closest("div")).toHaveClass(
        "modalTitleWrapper",
      );
    });

    it("applies the correct CSS classes for the description", () => {
      expect(screen.getByText(/Is this correct\?/).closest("div")).toHaveClass(
        "modalDescription",
      );
    });
  });
});
