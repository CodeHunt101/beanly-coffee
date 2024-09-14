import { fireEvent, render, screen } from "@testing-library/react";
import {
  PlanProvider,
  PlanContext,
  PlanContextType,
} from "@/app/_context/planContext";
import { useContext } from "react";

// Helper component to test context
const TestComponent = () => {
  const { selectedOptions, setSelectedOption } =
    useContext<PlanContextType>(PlanContext);

  return (
    <>
      <p data-testid="selected-option">{JSON.stringify(selectedOptions)}</p>
      <button onClick={() => setSelectedOption("step-1", "Capsule")}>
        Select Capsule
      </button>
    </>
  );
};

describe("PlanContext", () => {
  describe("PlanProvider", () => {
    it("should render children inside the provider", () => {
      render(
        <PlanProvider>
          <p>Test content</p>
        </PlanProvider>,
      );

      expect(screen.getByText("Test content")).toBeInTheDocument();
    });

    it("should have an empty selectedOptions initially", () => {
      render(
        <PlanProvider>
          <TestComponent />
        </PlanProvider>,
      );

      const selectedOptionDisplay = screen.getByTestId("selected-option");

      // Ensure selectedOptions is initially empty
      expect(selectedOptionDisplay.textContent).toBe("{}");
    });

    it("should update selectedOptions when setSelectedOption is called", () => {
      render(
        <PlanProvider>
          <TestComponent />
        </PlanProvider>,
      );

      const button = screen.getByText("Select Capsule");
      fireEvent.click(button);

      const selectedOptionDisplay = screen.getByTestId("selected-option");

      // After click, selectedOptions should be updated
      expect(selectedOptionDisplay.textContent).toBe(
        JSON.stringify({ "step-1": "Capsule" }),
      );
    });
  });
});
