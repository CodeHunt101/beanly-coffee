import React from "react";
import { render, screen } from "@testing-library/react";
import Commitment from "./Commitment";
import commitmentImageDesktop from "@/public/assets/about/desktop/image-commitment.jpg";
import commitmentImageTablet from "@/public/assets/about/tablet/image-commitment.jpg";

// Mock the next/image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

// Mock the imported styles
jest.mock("./Commitment.module.scss", () => ({
  commitment: "mock-commitment-class",
  image: "mock-image-class",
  content: "mock-content-class",
  title: "mock-title-class",
  description: "mock-description-class",
}));

describe("Commitment Component", () => {
  beforeEach(() => {
    render(<Commitment />);
  });

  describe("Rendering", () => {
    it("renders without crashing", () => {
      expect(
        screen.getByRole("heading", { name: /our commitment/i }),
      ).toBeInTheDocument();
    });
  });

  describe("Title", () => {
    it("renders the correct title", () => {
      expect(screen.getByText("Our commitment")).toBeInTheDocument();
    });
  });

  describe("Description", () => {
    it("renders the description text", () => {
      expect(
        screen.getByText(/We’re built on a simple mission/),
      ).toBeInTheDocument();
    });
  });

  describe("Image", () => {
    it("renders the image with correct alt text", () => {
      const image = screen.getByAltText("A barista carefully doing coffee art");
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

      it("renders the desktop source correctly", () => {
        const desktopSource = picture?.querySelector(
          'source[media="(min-width: 992px)"]',
        );
        expect(desktopSource).toHaveAttribute(
          "srcset",
          commitmentImageDesktop.src,
        );
      });

      it("renders the tablet source correctly", () => {
        const tabletSource = picture?.querySelector(
          'source[media="(min-width: 768px)"]',
        );
        expect(tabletSource).toHaveAttribute(
          "srcset",
          commitmentImageTablet.src,
        );
      });
    });
  });

  describe("CSS Classes", () => {
    it("applies correct class to the title", () => {
      expect(
        screen.getByRole("heading", { name: /our commitment/i }),
      ).toHaveClass("mock-title-class");
    });

    it("applies correct class to the description", () => {
      expect(screen.getByText(/We’re built on a simple mission/)).toHaveClass(
        "mock-description-class",
      );
    });
  });
});
