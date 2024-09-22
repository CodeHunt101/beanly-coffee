import { fireEvent, render, screen } from "@testing-library/react";
import { PlanProvider, PlanContext } from "@/app/_context/planContext";
import { useContext } from "react";
import { PlanContextType, Step } from "@/app/_utils/types";

// Helper component to test context
const TestComponent = () => {
  const { selectedOptions, setSelectedOption, isModalOpen, openModal } =
    useContext<PlanContextType>(PlanContext);

  return (
    <>
      <p data-testid="selected-option">{JSON.stringify(selectedOptions)}</p>
      <p data-testid="modal-state">{isModalOpen.toString()}</p>
      <button onClick={() => setSelectedOption(Step.BrewMethod, "Capsule")}>
        Select Capsule
      </button>
      <button onClick={() => openModal(true)}>Open Modal</button>
      <button onClick={() => openModal(false)}>Close Modal</button>
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
      expect(selectedOptionDisplay.textContent).toBe(
        JSON.stringify({ "step-1": "Capsule" }),
      );
    });

    it("should have isModalOpen as false initially", () => {
      render(
        <PlanProvider>
          <TestComponent />
        </PlanProvider>,
      );

      const modalStateDisplay = screen.getByTestId("modal-state");
      expect(modalStateDisplay.textContent).toBe("false");
    });

    it("should update isModalOpen to true when openModal(true) is called", () => {
      render(
        <PlanProvider>
          <TestComponent />
        </PlanProvider>,
      );

      const openModalButton = screen.getByText("Open Modal");
      fireEvent.click(openModalButton);

      const modalStateDisplay = screen.getByTestId("modal-state");
      expect(modalStateDisplay.textContent).toBe("true");
    });

    it("should update isModalOpen to false when openModal(false) is called", () => {
      render(
        <PlanProvider>
          <TestComponent />
        </PlanProvider>,
      );

      const openModalButton = screen.getByText("Open Modal");
      const closeModalButton = screen.getByText("Close Modal");

      fireEvent.click(openModalButton);
      fireEvent.click(closeModalButton);

      const modalStateDisplay = screen.getByTestId("modal-state");
      expect(modalStateDisplay.textContent).toBe("false");
    });

    it("should not affect isModalOpen when updating selectedOptions", () => {
      render(
        <PlanProvider>
          <TestComponent />
        </PlanProvider>,
      );

      const openModalButton = screen.getByText("Open Modal");
      const selectCapsuleButton = screen.getByText("Select Capsule");

      fireEvent.click(openModalButton);
      fireEvent.click(selectCapsuleButton);

      const modalStateDisplay = screen.getByTestId("modal-state");
      expect(modalStateDisplay.textContent).toBe("true");
    });

    it("should not affect selectedOptions when updating isModalOpen", () => {
      render(
        <PlanProvider>
          <TestComponent />
        </PlanProvider>,
      );

      const selectCapsuleButton = screen.getByText("Select Capsule");
      const openModalButton = screen.getByText("Open Modal");

      fireEvent.click(selectCapsuleButton);
      fireEvent.click(openModalButton);

      const selectedOptionDisplay = screen.getByTestId("selected-option");
      expect(selectedOptionDisplay.textContent).toBe(
        JSON.stringify({ "step-1": "Capsule" }),
      );
    });
  });
});
