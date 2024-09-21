import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import OptionCards, {
  OptionCardContent,
} from "@/components/optionCards/OptionCards";

describe("OptionCards component", () => {
  const mockOptions: OptionCardContent[] = [
    { optionTitle: "Option 1", content: "Content for Option 1" },
    { optionTitle: "Option 2", content: "Content for Option 2" },
    { optionTitle: "Option 3", content: "Content for Option 3" },
  ];

  const mockSetSelectedOption = jest.fn(); // Mock function for setSelectedOption

  const defaultProps = {
    id: "test-id",
    options: mockOptions,
    setSelectedOption: mockSetSelectedOption,
  };

  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test to avoid interference between tests
  });

  describe("Rendering", () => {
    it("renders three OptionCard components", () => {
      render(<OptionCards {...defaultProps} />);
      const cards = screen.getAllByRole("button");
      expect(cards.length).toBe(3); // One for each option
    });

    it("renders the correct title for Option 1", () => {
      render(<OptionCards {...defaultProps} />);
      expect(screen.getByText("Option 1")).toBeInTheDocument();
    });

    it("renders the correct title for Option 2", () => {
      render(<OptionCards {...defaultProps} />);
      expect(screen.getByText("Option 2")).toBeInTheDocument();
    });

    it("renders the correct title for Option 3", () => {
      render(<OptionCards {...defaultProps} />);
      expect(screen.getByText("Option 3")).toBeInTheDocument();
    });

    it("renders the correct content for Option 1", () => {
      render(<OptionCards {...defaultProps} />);
      expect(screen.getByText("Content for Option 1")).toBeInTheDocument();
    });

    it("renders the correct content for Option 2", () => {
      render(<OptionCards {...defaultProps} />);
      expect(screen.getByText("Content for Option 2")).toBeInTheDocument();
    });

    it("renders the correct content for Option 3", () => {
      render(<OptionCards {...defaultProps} />);
      expect(screen.getByText("Content for Option 3")).toBeInTheDocument();
    });

    it("does not select any card initially", () => {
      render(<OptionCards {...defaultProps} />);
      const card = screen.getByText("Option 1").closest("button");
      expect(card).not.toHaveClass("selected");
    });
  });

  describe("State management", () => {
    it("sets Option 1 as selected when clicked", () => {
      render(<OptionCards {...defaultProps} />);
      const card = screen.getByText("Option 1").closest("button");
      fireEvent.click(card!);
      expect(card).toHaveClass("selected");
    });

    it("deselects Option 1 when Option 2 is clicked", () => {
      render(<OptionCards {...defaultProps} />);
      const card1 = screen.getByText("Option 1").closest("button");
      const card2 = screen.getByText("Option 2").closest("button");

      fireEvent.click(card1!); // Select Option 1
      fireEvent.click(card2!); // Select Option 2

      expect(card1).not.toHaveClass("selected");
    });

    it("selects only Option 2 when it is clicked", () => {
      render(<OptionCards {...defaultProps} />);
      const card2 = screen.getByText("Option 2").closest("button");

      fireEvent.click(card2!); // Select Option 2
      expect(card2).toHaveClass("selected");
    });
  });

  describe("Interaction", () => {
    it("calls setSelectedOption with the correct id and title for Option 1", () => {
      render(<OptionCards {...defaultProps} />);
      const card = screen.getByText("Option 1").closest("button");
      fireEvent.click(card!);
      expect(mockSetSelectedOption).toHaveBeenCalledWith("test-id", "Option 1");
    });

    it("calls setSelectedOption with the correct id and title for Option 2", () => {
      render(<OptionCards {...defaultProps} />);
      const card = screen.getByText("Option 2").closest("button");
      fireEvent.click(card!);
      expect(mockSetSelectedOption).toHaveBeenCalledWith("test-id", "Option 2");
    });

    it("calls setSelectedOption with the correct id and title for Option 3", () => {
      render(<OptionCards {...defaultProps} />);
      const card = screen.getByText("Option 3").closest("button");
      fireEvent.click(card!);
      expect(mockSetSelectedOption).toHaveBeenCalledWith("test-id", "Option 3");
    });
  });
});
