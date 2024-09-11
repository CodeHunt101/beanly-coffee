import React from "react";
import { render, screen } from "@testing-library/react";
import Features from "./Features";
import "@testing-library/jest-dom";

// Mock the FeatureList component to simplify the test
jest.mock("./FeatureList", () => () => <div data-testid="feature-list" />);

// Mock the styles object
jest.mock("./Features.module.scss", () => ({
  features: "mock-features",
  header: "mock-header",
  title: "mock-title",
  description: "mock-description",
}));

describe("Features", () => {
  describe("renders the header", () => {
    beforeEach(() => {
      render(<Features />);
    });

    describe("renders the title", () => {
      it('renders the title "Why choose us?"', () => {
        const title = screen.getByRole("heading", { name: /Why choose us?/i });
        expect(title).toBeInTheDocument();
      });

      it("applies the correct CSS class to the title", () => {
        const title = screen.getByRole("heading", { name: /Why choose us?/i });
        expect(title).toHaveClass("mock-title");
      });

      it('applies the additional "ff-serif" class to the title', () => {
        const title = screen.getByRole("heading", { name: /Why choose us?/i });
        expect(title).toHaveClass("ff-serif");
      });
    });

    describe("renders the description", () => {
      it("renders the correct description text", () => {
        const description = screen.getByText(
          /A large part of our role is choosing which particular coffees will be featured in our range/i,
        );
        expect(description).toBeInTheDocument();
      });

      it("applies the correct CSS class to the description", () => {
        const description = screen.getByText(
          /A large part of our role is choosing which particular coffees will be featured in our range/i,
        );
        expect(description).toHaveClass("mock-description");
      });
    });
  });

  describe("renders the FeatureList component", () => {
    it("renders the FeatureList component", () => {
      render(<Features />);
      const featureList = screen.getByTestId("feature-list");
      expect(featureList).toBeInTheDocument();
    });
  });
});
