import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "@/components/buttons/Button";

describe("Button Component", () => {
  const buttonText = "Click Me";

  describe("Initial render", () => {
    it("should render the button with the correct text", () => {
      render(<Button>{buttonText}</Button>);
      expect(
        screen.getByRole("button", { name: buttonText }),
      ).toBeInTheDocument();
    });

    it("should apply the correct class to the button", () => {
      const { container } = render(<Button>{buttonText}</Button>);
      const button = container.querySelector("button");
      expect(button).toHaveClass("btn");
    });

    it("should render the button as enabled by default", () => {
      render(<Button>{buttonText}</Button>);
      expect(
        screen.getByRole("button", { name: buttonText }),
      ).not.toBeDisabled();
    });

    it("should render the button with the correct default background color class", () => {
      const { container } = render(<Button>{buttonText}</Button>);
      const button = container.querySelector("button");
      expect(button).toHaveClass("bg-primary");
    });

    it("should render the button with the correct default text color class", () => {
      const { container } = render(<Button>{buttonText}</Button>);
      const button = container.querySelector("button");
      expect(button).toHaveClass("text-light");
    });
  });

  describe("Disabled state", () => {
    it("should disable the button when the disabled prop is true", () => {
      render(<Button disabled>{buttonText}</Button>);
      expect(screen.getByRole("button", { name: buttonText })).toBeDisabled();
    });

    it("should render the button as enabled when the disabled prop is false", () => {
      render(<Button disabled={false}>{buttonText}</Button>);
      expect(
        screen.getByRole("button", { name: buttonText }),
      ).not.toBeDisabled();
    });
  });

  describe("onClick functionality", () => {
    it("should call onClick handler when the button is clicked", () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick}>{buttonText}</Button>);
      fireEvent.click(screen.getByRole("button", { name: buttonText }));
      expect(handleClick).toHaveBeenCalled();
    });

    it("should not call onClick handler when the button is disabled", () => {
      const handleClick = jest.fn();
      render(
        <Button onClick={handleClick} disabled>
          {buttonText}
        </Button>,
      );
      fireEvent.click(screen.getByRole("button", { name: buttonText }));
      expect(handleClick).not.toHaveBeenCalled();
    });
  });
});
