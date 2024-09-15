import { render, screen, fireEvent } from "@testing-library/react";
import { PlanContext } from "@/app/_context/planContext";
import CreatePlanSection from "./CreatePlanSection";
import { PlanContextType } from "@/app/_utils/types";

// Mock data for context
const mockSetSelectedOption = jest.fn();
const mockContextValue: PlanContextType = {
  selectedOptions: {},
  setSelectedOption: mockSetSelectedOption,
};

describe("CreatePlanSection", () => {
  const renderComponent = () => {
    return render(
      <PlanContext.Provider value={mockContextValue}>
        <CreatePlanSection />
      </PlanContext.Provider>,
    );
  };

  describe("Rendering", () => {
    it("should render the CreatePlanSection component", () => {
      renderComponent();
      expect(screen.getByRole("region")).toBeInTheDocument();
    });
  });

  describe("Accordion behavior", () => {
    it("should have the first accordion item open by default", () => {
      renderComponent();
      const accordionButtons = screen.getAllByRole("button");
      expect(accordionButtons[0]).toHaveAttribute("aria-expanded", "true");
    });

    it("should close all other accordion items by default", () => {
      renderComponent();
      const accordionButtons = screen.getAllByRole("button");
      expect(accordionButtons[1]).toHaveAttribute("aria-expanded", "false");
    });
  });

  describe("Option selection", () => {
    it("should call setSelectedOption when an option is clicked", () => {
      renderComponent();
      const firstOptionButton = screen.getByText("Capsule");

      fireEvent.click(firstOptionButton);

      expect(mockSetSelectedOption).toHaveBeenCalledWith("step-1", "Capsule");
    });
  });

  describe("Context interaction", () => {
    it("should update the context when an option is selected", () => {
      renderComponent();
      const filterOptionButton = screen.getAllByText("Filter")[0];

      fireEvent.click(filterOptionButton);

      expect(mockSetSelectedOption).toHaveBeenCalledWith("step-1", "Filter");
    });
  });
});
