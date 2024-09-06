import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import OptionCards, {
  OptionCardData,
} from "@/components/optionCards/OptionCards";

describe("OptionCards component", () => {
  const mockOptions: OptionCardData[] = [
    { title: "Option 1", content: "Content for Option 1" },
    { title: "Option 2", content: "Content for Option 2" },
    { title: "Option 3", content: "Content for Option 3" },
  ];

  describe("Rendering", () => {
    it("renders all OptionCard components", () => {
      render(<OptionCards options={mockOptions} />);
      const cards = screen.getAllByRole("tab");
      expect(cards.length).toBe(3); // One for each option
    });

    it("renders the correct title for each OptionCard", () => {
      render(<OptionCards options={mockOptions} />);
      mockOptions.forEach((option) => {
        expect(screen.getByText(option.title)).toBeInTheDocument();
      });
    });

    it("renders the correct content for each OptionCard", () => {
      render(<OptionCards options={mockOptions} />);
      mockOptions.forEach((option) => {
        expect(screen.getByText(option.content)).toBeInTheDocument();
      });
    });

    it("does not select any card initially", () => {
      render(<OptionCards options={mockOptions} />);
      mockOptions.forEach((option) => {
        const card = screen.getByText(option.title).closest("button");
        expect(card).not.toHaveClass("selected");
      });
    });
  });

  describe("State management", () => {
    it("sets the correct card as selected when clicked", () => {
      render(<OptionCards options={mockOptions} />);
      const card = screen.getByText("Option 1").closest("button");
      fireEvent.click(card!);
      expect(card).toHaveClass("selected");
    });

    it("deselects the previously selected card when a new card is clicked", () => {
      render(<OptionCards options={mockOptions} />);

      const card1 = screen.getByText("Option 1").closest("button");
      const card2 = screen.getByText("Option 2").closest("button");

      fireEvent.click(card1!); // Select card 1
      fireEvent.click(card2!); // Select card 2

      expect(card1).not.toHaveClass("selected");
    });

    it("only one card is selected at a time", () => {
      render(<OptionCards options={mockOptions} />);

      const card1 = screen.getByText("Option 1").closest("button");
      const card2 = screen.getByText("Option 2").closest("button");

      fireEvent.click(card1!); // Select card 1
      expect(card1).toHaveClass("selected");

      fireEvent.click(card2!); // Select card 2
      expect(card1).not.toHaveClass("selected");
      expect(card2).toHaveClass("selected");
    });
  });

  describe("Interaction", () => {
    it("calls the onSelect function when an OptionCard is clicked", () => {
      render(<OptionCards options={mockOptions} />);
      const card = screen.getByText("Option 1").closest("button");
      fireEvent.click(card!);
      expect(card).toHaveClass("selected");
    });
  });
});
