import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import OrderSummary from "./OrderSummary";
import OrderSummaryDetails from "./OrderSummaryDetails";
import Button from "@/components/buttons/Button";
import Modal from "@/components/modal/Modal";
import { PlanContext } from "@/app/_context/planContext";
import { SelectedOptions, Step } from "@/app/_utils/types";

// Mock OrderSummaryDetails, Button, and Modal components
jest.mock("./OrderSummaryDetails");
jest.mock("@/components/buttons/Button");
jest.mock("@/components/modal/Modal");
jest.mock("../helpers/utils", () => ({
  calculatePrice: jest.fn(),
}));

const setSelectedOption = jest.fn;
const openModal = jest.fn();

describe("OrderSummary Component", () => {
  const selectedOptions: Partial<SelectedOptions> = {
    [Step.Size]: "500g",
    [Step.DeliveryFrequency]: "Every month",
  };

  const isModalOpen = false;

  beforeEach(() => {
    (OrderSummaryDetails as jest.Mock).mockImplementation(() => (
      <div>OrderSummaryDetails</div>
    ));
    (Button as jest.Mock).mockImplementation(({ children, onClick }) => (
      <button onClick={onClick}>{children}</button>
    ));
    (Modal as jest.Mock).mockImplementation(({ isOpen, onClose, children }) =>
      isOpen ? (
        <div>
          <button onClick={onClose}>Close Modal</button>
          {children}
        </div>
      ) : null,
    );
  });

  const renderWithContext = () => {
    return render(
      <PlanContext.Provider
        value={{ selectedOptions, setSelectedOption, isModalOpen, openModal }}
      >
        <OrderSummary />
      </PlanContext.Provider>,
    );
  };

  describe("renders correctly", () => {
    it("renders the order summary heading", () => {
      renderWithContext();
      const headingElement = screen.getByRole("heading", {
        name: /Order Summary/i,
      });
      expect(headingElement).toBeInTheDocument();
    });

    it("renders the OrderSummaryDetails component", () => {
      renderWithContext();
      const detailsElement = screen.getByText("OrderSummaryDetails");
      expect(detailsElement).toBeInTheDocument();
    });

    it("renders the create plan button", () => {
      renderWithContext();
      const buttonElement = screen.getByRole("button", {
        name: /Create my plan!/i,
      });
      expect(buttonElement).toBeInTheDocument();
    });

    it("should open modal when plan button is clicked", () => {
      renderWithContext();
      const buttonElement = screen.getByRole("button", {
        name: /Create my plan!/i,
      });
      fireEvent.click(buttonElement);
      expect(openModal).toHaveBeenCalledWith(true);
      waitFor(() => {
        expect(isModalOpen).toBe(true);
      });
    });
  });
});
