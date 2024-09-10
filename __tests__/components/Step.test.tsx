import Step, { StepProps } from "@/components/steps/Step";
import { render, screen } from "@testing-library/react";

describe("Step Component", () => {
  const defaultProps: StepProps = {
    number: "1",
    title: "Step Title",
    description: "This is the description for step 1.",
    theme: "light",
  };

  describe("with light theme", () => {
    beforeEach(() => {
      render(<Step {...defaultProps} theme="light" />);
    });

    it("renders stepItem with the correct class", () => {
      const stepItem = screen.getByRole("listitem");
      expect(stepItem).toHaveClass("stepItem");
    });

    it("applies the light theme class", () => {
      const stepItem = screen.getByRole("listitem");
      expect(stepItem).toHaveClass("light");
    });
  });

  describe("with dark theme", () => {
    beforeEach(() => {
      render(<Step {...defaultProps} theme="dark" />);
    });

    it("renders stepItem with the correct class", () => {
      const stepItem = screen.getByRole("listitem");
      expect(stepItem).toHaveClass("stepItem");
    });

    it("applies the dark theme class", () => {
      const stepItem = screen.getByRole("listitem");
      expect(stepItem).toHaveClass("dark");
    });
  });

  describe("with correct props", () => {
    beforeEach(() => {
      render(<Step {...defaultProps} />);
    });

    it("displays the correct step number", () => {
      const stepNumber = screen.getByText(defaultProps.number);
      expect(stepNumber).toBeInTheDocument();
    });

    it("displays the correct step title", () => {
      const title = screen.getByText(defaultProps.title);
      expect(title).toBeInTheDocument();
    });

    it("displays the correct step description", () => {
      const description = screen.getByText(defaultProps.description);
      expect(description).toBeInTheDocument();
    });
  });
});
