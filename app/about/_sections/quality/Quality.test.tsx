import React from "react";
import { render, screen } from "@testing-library/react";
import Quality from "./Quality";

// Mock the next/image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

// Mock the imported styles
jest.mock("./Quality.module.scss", () => ({
  quality: "mock-quality-class",
  image: "mock-image-class",
  wrapper: "mock-wrapper-class",
  content: "mock-content-class",
  title: "mock-title-class",
  description: "mock-description-class",
}));

describe("Quality Component", () => {
  beforeEach(() => {
    render(<Quality />);
  });

  describe("Rendering", () => {
    it("renders without crashing", () => {
      expect(
        screen.getByRole("heading", { name: /uncompromising quality/i }),
      ).toBeInTheDocument();
    });
  });

  describe("Title", () => {
    it("renders the correct title", () => {
      expect(screen.getByText("Uncompromising quality")).toBeInTheDocument();
    });
  });

  describe("Description", () => {
    it("renders the description text", () => {
      expect(
        screen.getByText(/Although we work with growers/),
      ).toBeInTheDocument();
    });
  });

  describe("Image", () => {
    it("renders the image with correct alt text", () => {
      const image = screen.getByAltText(
        "A coffee cup with latte art being grabbed by a hand",
      );
      expect(image).toBeInTheDocument();
    });

    describe("Picture element and sources", () => {
      let picture: HTMLElement | null;

      beforeEach(() => {
        const sources = screen.getAllByRole("img");
        picture = sources[0].closest("picture");
      });

      it("renders the picture element", () => {
        expect(picture).toBeInTheDocument();
      });
    });
  });

  describe("CSS Classes", () => {
    it("applies correct class to the title", () => {
      expect(
        screen.getByRole("heading", { name: /uncompromising quality/i }),
      ).toHaveClass("mock-title-class");
    });

    it("applies correct class to the description", () => {
      expect(screen.getByText(/Although we work with growers/)).toHaveClass(
        "mock-description-class",
      );
    });
  });
});
