import React from "react";
import { render, screen } from "@testing-library/react";
import LocationList from "./LocationList";

// Mock the Location component
jest.mock("./Location", () => {
  return function MockLocation({ name }: any) {
    return <li data-testid="location-item">{name}</li>;
  };
});

// Mock the image imports
jest.mock("@/public/assets/about/desktop/illustration-australia.svg", () => ({
  src: "/mock-australia.svg",
}));
jest.mock("@/public/assets/about/desktop/illustration-canada.svg", () => ({
  src: "/mock-canada.svg",
}));
jest.mock("@/public/assets/about/desktop/illustration-uk.svg", () => ({
  src: "/mock-uk.svg",
}));

describe("LocationList", () => {
  beforeEach(() => {
    render(<LocationList />);
  });

  describe("rendering", () => {
    it("renders a list", () => {
      expect(screen.getByRole("list")).toBeInTheDocument();
    });

    it("renders three Location components", () => {
      const locationItems = screen.getAllByTestId("location-item");
      expect(locationItems).toHaveLength(3);
    });

    it("renders the United Kingdom location", () => {
      expect(screen.getByText("United Kingdom")).toBeInTheDocument();
    });

    it("renders the Canada location", () => {
      expect(screen.getByText("Canada")).toBeInTheDocument();
    });

    it("renders the Australia location", () => {
      expect(screen.getByText("Australia")).toBeInTheDocument();
    });
  });

  describe("props passing", () => {
    it("passes correct props to the UK Location component", () => {
      const ukLocation = screen.getByText("United Kingdom");
      expect(
        ukLocation.closest('[data-testid="location-item"]'),
      ).toBeInTheDocument();
    });

    it("passes correct props to the Canada Location component", () => {
      const canadaLocation = screen.getByText("Canada");
      expect(
        canadaLocation.closest('[data-testid="location-item"]'),
      ).toBeInTheDocument();
    });

    it("passes correct props to the Australia Location component", () => {
      const australiaLocation = screen.getByText("Australia");
      expect(
        australiaLocation.closest('[data-testid="location-item"]'),
      ).toBeInTheDocument();
    });
  });

  describe("styling", () => {
    it("applies the correct class to the list", () => {
      const list = screen.getByRole("list");
      expect(list).toHaveClass("countries");
    });
  });
});
