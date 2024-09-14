import React from "react";
import { render, screen } from "@testing-library/react";
import Locations from "./Locations";

// Mock the LocationList component
jest.mock("./LocationList", () => {
  return function MockLocationList() {
    return <div data-testid="location-list">Mocked LocationList</div>;
  };
});

describe("Locations", () => {
  beforeEach(() => {
    render(<Locations />);
  });

  describe("rendering", () => {
    it("renders a section element", () => {
      expect(screen.getByRole("region")).toBeInTheDocument();
    });

    it('renders the title "Our headquarters"', () => {
      expect(screen.getByText("Our headquarters")).toBeInTheDocument();
    });

    it("renders the LocationList component", () => {
      expect(screen.getByTestId("location-list")).toBeInTheDocument();
    });
  });

  describe("styling", () => {
    it("applies the correct class to the section", () => {
      const section = screen.getByRole("region");
      expect(section).toHaveClass("locations");
    });

    it("applies the correct classes to the title", () => {
      const title = screen.getByText("Our headquarters");
      expect(title).toHaveClass("title");
      expect(title).toHaveClass("ff-serif");
    });
  });

  describe("accessibility", () => {
    it("renders the title as a heading level 2", () => {
      expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
        "Our headquarters",
      );
    });
  });
});
