import React from "react";
import { render, screen } from "@testing-library/react";
import FeatureList from "./FeatureList";
import "@testing-library/jest-dom";

// Mock the FeatureCard component to simplify the test
jest.mock("./FeatureCard", () => (props: any) => (
  <div data-testid="feature-card">
    <img src={props.icon.src} alt={props.alt} />
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </div>
));

// Mock the styles object
jest.mock("./Features.module.scss", () => ({
  featureList: "mock-feature-list",
}));

describe("FeatureList", () => {
  beforeEach(() => {
    render(<FeatureList />);
  });

  describe("renders the correct number of FeatureCards", () => {
    it("renders three FeatureCard components", () => {
      const featureCards = screen.getAllByTestId("feature-card");
      expect(featureCards.length).toBe(3);
    });

    it("renders an icon for each FeatureCard", () => {
      const images = screen.getAllByRole("img");
      images.forEach((image) => {
        expect(image).toHaveAttribute("src", "/img.jpg");
      });
    });
  });

  describe("FeatureCard content", () => {
    describe("renders the correct title for each FeatureCard", () => {
      it('renders the title for "Best quality"', () => {
        expect(screen.getByText("Best quality")).toBeInTheDocument();
      });

      it('renders the title for "Exclusive benefits"', () => {
        expect(screen.getByText("Exclusive benefits")).toBeInTheDocument();
      });

      it('renders the title for "Free shipping"', () => {
        expect(screen.getByText("Free shipping")).toBeInTheDocument();
      });
    });

    describe("renders the correct description for each FeatureCard", () => {
      it('renders the description for "Best quality"', () => {
        expect(
          screen.getByText(
            "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
          ),
        ).toBeInTheDocument();
      });

      it('renders the description for "Exclusive benefits"', () => {
        expect(
          screen.getByText(
            "Special offers and swag when you subscribe, including 30% off your first shipment.",
          ),
        ).toBeInTheDocument();
      });

      it('renders the description for "Free shipping"', () => {
        expect(
          screen.getByText(
            "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
          ),
        ).toBeInTheDocument();
      });
    });
  });

  describe("CSS classes", () => {
    it("applies the correct class to the list container", () => {
      const list = screen.getByRole("list");
      expect(list).toHaveClass("mock-feature-list");
    });
  });
});
