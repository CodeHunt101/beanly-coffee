import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import OptionCard from "@/components/optionCards/OptionCard";

describe("OptionCard component", () => {
  const mockOnSelect = jest.fn();

  const props = {
    title: "Test Title",
    content: "Test Content",
    isSelected: false,
    onSelect: mockOnSelect,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("Rendering", () => {
    it("renders the title correctly", () => {
      render(<OptionCard {...props} />);
      const titleElement = screen.getByRole("heading", { level: 3 });
      expect(titleElement).toHaveTextContent("Test Title");
    });

    it("renders the content correctly", () => {
      render(<OptionCard {...props} />);
      const contentElement = screen.getByText("Test Content");
      expect(contentElement).toBeInTheDocument();
    });
  });

  describe("Button styles", () => {
    it("applies default button styles when not selected", () => {
      render(<OptionCard {...props} />);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("bg-muted text-dark");
    });

    it("does not apply selected class when not selected", () => {
      render(<OptionCard {...props} />);
      const button = screen.getByRole("button");
      expect(button).not.toHaveClass("selected");
    });

    it("applies selected styles when isSelected is true", () => {
      render(<OptionCard {...props} isSelected={true} />);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("selected");
    });
  });

  describe("Interactions", () => {
    it("calls onSelect function when clicked", () => {
      render(<OptionCard {...props} />);
      const button = screen.getByRole("button");
      fireEvent.click(button);
      expect(mockOnSelect).toHaveBeenCalledTimes(1);
    });
  });
});
