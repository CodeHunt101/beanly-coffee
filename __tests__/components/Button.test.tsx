import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // for custom matchers like "toBeDisabled"
import Button from "@/components/button/Button";

describe("Button Component", () => {
  const mockOnClick = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("Rendering", () => {
    it("renders with provided content", () => {
      const content = "Click me";
      render(<Button content={content} />);

      const buttonElement = screen.getByRole("button");
      expect(buttonElement).toHaveTextContent(content);
    });

    it("has the correct bg-primary class", () => {
      render(<Button content="Click me" />);
      const buttonElement = screen.getByRole("button");
      expect(buttonElement).toHaveClass("bg-primary");
    });

    it("has the correct ff-serif class", () => {
      render(<Button content="Click me" />);
      const buttonElement = screen.getByRole("button");
      expect(buttonElement).toHaveClass("ff-serif");
    });

    it("has the correct text-background class", () => {
      render(<Button content="Click me" />);
      const buttonElement = screen.getByRole("button");
      expect(buttonElement).toHaveClass("text-background");
    });
  });

  describe("onClick Functionality", () => {
    it("calls onClick when button is clicked", () => {
      render(<Button content="Click me" onClick={mockOnClick} />);
      const buttonElement = screen.getByRole("button");
      fireEvent.click(buttonElement);

      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("Disabled State", () => {
    it("does not call onClick when button is disabled", () => {
      render(<Button content="Click me" onClick={mockOnClick} disabled />);
      const buttonElement = screen.getByRole("button");
      fireEvent.click(buttonElement);

      expect(mockOnClick).not.toHaveBeenCalled();
    });

    it("has the disabled attribute when disabled is true", () => {
      render(<Button content="Click me" disabled />);
      const buttonElement = screen.getByRole("button");
      expect(buttonElement).toBeDisabled();
    });

    it("does not have the disabled attribute when disabled is false", () => {
      render(<Button content="Click me" disabled={false} />);
      const buttonElement = screen.getByRole("button");
      expect(buttonElement).not.toBeDisabled();
    });
  });
});
