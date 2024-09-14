import React from "react";
import { render, screen } from "@testing-library/react";
import Location from "./Location";

// Mock the next/image import
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

describe("Location", () => {
  const mockProps = {
    image: { src: "/mock-image.jpg", height: 300, width: 400 },
    alt: "Mock Location",
    name: "Mock Country",
    location: {
      address: "123 Mock St",
      city: "Mock City",
      state: "Mock State",
      phone: "123-456-7890",
    },
  };

  describe("rendering", () => {
    beforeEach(() => {
      render(<Location {...mockProps} />);
    });

    it("renders the image with correct alt text", () => {
      const image = screen.getByRole("img");
      expect(image).toHaveAttribute("alt", "Mock Location");
    });

    it("renders the location name", () => {
      expect(screen.getByText("Mock Country")).toBeInTheDocument();
    });

    it("renders the address", () => {
      expect(screen.getByText("123 Mock St")).toBeInTheDocument();
    });

    it("renders the city", () => {
      expect(screen.getByText("Mock City")).toBeInTheDocument();
    });

    it("renders the state", () => {
      expect(screen.getByText("Mock State")).toBeInTheDocument();
    });

    it("renders the phone number", () => {
      expect(screen.getByText("123-456-7890")).toBeInTheDocument();
    });
  });

  describe("styling", () => {
    it("applies the correct class to the list item", () => {
      const { container } = render(<Location {...mockProps} />);
      expect(container.firstChild).toHaveClass("countryCard");
    });

    it("applies the correct class to the image wrapper", () => {
      const { container } = render(<Location {...mockProps} />);
      expect(container.querySelector("div")).toHaveClass("imageWrapper");
    });

    it("applies the correct class to the image", () => {
      const { container } = render(<Location {...mockProps} />);
      expect(container.querySelector("img")).toHaveClass("countryImage");
    });

    it("applies the correct classes to the country name", () => {
      const { container } = render(<Location {...mockProps} />);
      const nameElement = container.querySelector("h3");
      expect(nameElement).toHaveClass("countryName");
      expect(nameElement).toHaveClass("ff-serif");
    });

    it("applies the correct class to the location info container", () => {
      const { container } = render(<Location {...mockProps} />);
      expect(container.querySelector(".locationInfo")).toBeInTheDocument();
    });
  });
});
