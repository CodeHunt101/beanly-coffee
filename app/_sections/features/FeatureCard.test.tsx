import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import FeatureCard, { FeatureCardProps } from "./FeatureCard";
import "@testing-library/jest-dom";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";

// Mock the Next.js Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

// Mock the styles object
jest.mock("./Features.module.scss", () => ({
  featureItem: "mock-feature-item",
  featureCard: "mock-feature-card",
  featureContent: "mock-feature-content",
  featureTitle: "mock-feature-title",
  featureDescription: "mock-feature-description",
}));

// Mock the StaticImport type
const mockStaticImport: StaticImageData = {
  src: "/mock-icon.png",
  height: 100,
  width: 100,
  blurDataURL: "data:image/png;base64,mockbase64",
};

describe("FeatureCard", () => {
  const mockProps: FeatureCardProps = {
    icon: mockStaticImport,
    title: "Test Title",
    description: "Test Description",
    alt: "Test Alt Text",
  };

  describe("renders the component with all props", () => {
    beforeEach(() => {
      render(<FeatureCard {...mockProps} />);
    });

    it("renders the image with src attribute", () => {
      const image = screen.getByRole("img");
      expect(image).toHaveAttribute("src");
    });

    it("renders the image with correct alt attribute", () => {
      const image = screen.getByRole("img");
      expect(image).toHaveAttribute("alt", mockProps.alt);
    });

    it("renders the title with the correct text", () => {
      const title = screen.getByRole("heading", { name: mockProps.title });
      expect(title).toBeInTheDocument();
    });

    it("applies correct title CSS class", () => {
      const title = screen.getByRole("heading", { name: mockProps.title });
      expect(title).toHaveClass("mock-feature-title");
    });

    it("renders the description with the correct text", () => {
      const description = screen.getByText(mockProps.description);
      expect(description).toBeInTheDocument();
    });

    it("applies correct description CSS class", () => {
      const description = screen.getByText(mockProps.description);
      expect(description).toHaveClass("mock-feature-description");
    });
  });

  describe("renders with default alt text when not provided", () => {
    it("applies an empty alt attribute when alt is not provided", async () => {
      const propsWithoutAlt: FeatureCardProps = {
        ...mockProps,
        alt: undefined,
      };
      render(<FeatureCard {...propsWithoutAlt} />);

      waitFor(() => {
        const image = screen.getByRole("img");
        expect(image).toHaveAttribute("alt", "");
      });
    });
  });

  describe("applies correct CSS classes", () => {
    beforeEach(() => {
      render(<FeatureCard {...mockProps} />);
    });

    it("applies the correct class to the list item", () => {
      const listItem = screen.getByRole("listitem");
      expect(listItem).toHaveClass("mock-feature-item");
    });

    it("applies the correct class to the feature card", () => {
      const listItem = screen.getByRole("listitem");
      const card = listItem.firstChild;
      expect(card).toHaveClass("mock-feature-card");
    });

    it("applies flex class to the feature card", () => {
      const listItem = screen.getByRole("listitem");
      const card = listItem.firstChild;
      expect(card).toHaveClass("flex");
    });

    it("applies the correct class to the content div", () => {
      const contentDiv = screen.getByText(mockProps.description).parentElement;
      expect(contentDiv).toHaveClass("mock-feature-content");
    });
  });

  describe("renders multiple FeatureCards correctly", () => {
    const features: FeatureCardProps[] = [
      { ...mockProps, title: "Feature 1" },
      { ...mockProps, title: "Feature 2" },
      { ...mockProps, title: "Feature 3" },
    ];

    beforeEach(() => {
      render(
        <ul>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </ul>,
      );
    });

    it("renders the correct number of feature items", () => {
      const featureItems = screen.getAllByRole("listitem");
      expect(featureItems.length).toBe(3);
    });

    features.forEach((feature) => {
      it(`renders the title for ${feature.title}`, () => {
        const title = screen.getByRole("heading", { name: feature.title });
        expect(title).toBeInTheDocument();
      });
    });
  });
});
