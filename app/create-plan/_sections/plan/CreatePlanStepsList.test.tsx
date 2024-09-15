import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PlanContext } from "@/app/_context/planContext";
import CreatePlanStepList from "./CreatePlanStepsList";
import { SelectedOptions } from "@/app/_utils/types";

// Mock the next/link component
jest.mock("next/link", () => {
  return ({ children, href }: any) => {
    return <a href={href}>{children}</a>;
  };
});

// Mock the stepLinks array
jest.mock("./content", () => ({
  stepLinks: ["Step 1", "Step 2", "Step 3"],
}));

describe("CreatePlanStepList", () => {
  const mockSelectedOptions: Partial<SelectedOptions> = {
    "step-1": "Capsule",
    "step-2": null,
    "step-3": null,
  };

  const mockContextValue = {
    selectedOptions: mockSelectedOptions,
    setSelectedOption: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Rendering", () => {
    it("renders the correct number of steps", () => {
      render(
        <PlanContext.Provider value={mockContextValue}>
          <CreatePlanStepList />
        </PlanContext.Provider>,
      );

      const listItems = screen.getAllByRole("listitem");
      expect(listItems).toHaveLength(3);
    });
  });

  describe("Step selection", () => {
    it("applies the selected class to a step with a selected option", () => {
      render(
        <PlanContext.Provider value={mockContextValue}>
          <CreatePlanStepList />
        </PlanContext.Provider>,
      );

      const selectedStep = screen.getByText("01");
      expect(selectedStep).toHaveClass("selected");
    });

    it("does not apply the selected class to a step without a selected option", () => {
      render(
        <PlanContext.Provider value={mockContextValue}>
          <CreatePlanStepList />
        </PlanContext.Provider>,
      );

      const unselectedStep = screen.getByText("02");
      expect(unselectedStep).not.toHaveClass("selected");
    });
  });

  describe("Scroll behavior", () => {
    beforeEach(() => {
      Object.defineProperty(window, "scrollY", { value: 200, writable: true });

      jest.spyOn(document, "getElementById").mockImplementation((id) => {
        if (id === "step-1" || id === "step-2" || id === "step-3") {
          return {
            offsetTop: id === "step-2" ? 150 : 300,
            getBoundingClientRect: () => ({
              top: id === "step-2" ? 150 : 300,
              left: 0,
              right: 0,
              bottom: 0,
              width: 0,
              height: 0,
            }),
          } as unknown as HTMLElement;
        }
        return null;
      });
    });

    it("updates active step on scroll", () => {
      render(
        <PlanContext.Provider value={mockContextValue}>
          <CreatePlanStepList />
        </PlanContext.Provider>,
      );

      fireEvent.scroll(window);

      waitFor(() => {
        const activeStep = screen.getByText("Step 2");
        expect(activeStep).toHaveClass("active");
      });
    });
  });

  describe("Link rendering", () => {
    it("renders correct link for step 1", () => {
      render(
        <PlanContext.Provider value={mockContextValue}>
          <CreatePlanStepList />
        </PlanContext.Provider>,
      );

      const links = screen.getAllByRole("link");
      expect(links[0]).toHaveAttribute("href", "#step-1");
    });

    it("renders correct link for step 2", () => {
      render(
        <PlanContext.Provider value={mockContextValue}>
          <CreatePlanStepList />
        </PlanContext.Provider>,
      );

      const links = screen.getAllByRole("link");
      expect(links[1]).toHaveAttribute("href", "#step-2");
    });

    it("renders correct link for step 3", () => {
      render(
        <PlanContext.Provider value={mockContextValue}>
          <CreatePlanStepList />
        </PlanContext.Provider>,
      );

      const links = screen.getAllByRole("link");
      expect(links[2]).toHaveAttribute("href", "#step-3");
    });
  });
});
