import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

jest.mock("@/components/logo/Logo", () => () => (
  <div data-testid="mock-logo">Logo</div>
));
jest.mock("@/components/imageLink/ImageLink", () => ({ href, alt }: any) => (
  <a href={href} data-testid={`mock-image-link-${alt.toLowerCase()}`}>
    {alt}
  </a>
));

describe("Footer", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  describe("Structure", () => {
    it("renders the footer element", () => {
      expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    });

    it("renders the Logo component", () => {
      expect(screen.getByTestId("mock-logo")).toBeInTheDocument();
    });

    it("renders the footer navigation", () => {
      expect(
        screen.getByRole("navigation", { name: "Footer Navigation" }),
      ).toBeInTheDocument();
    });
  });

  describe("Navigation Links", () => {
    it("renders the Home link", () => {
      expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute(
        "href",
        "/",
      );
    });

    it("renders the About Us link", () => {
      expect(screen.getByRole("link", { name: "About Us" })).toHaveAttribute(
        "href",
        "/about",
      );
    });

    it("renders the Create Your Plan link", () => {
      expect(
        screen.getByRole("link", { name: "Create Your Plan" }),
      ).toHaveAttribute("href", "/create-plan");
    });
  });

  describe("Social Links", () => {
    it("renders the Facebook link", () => {
      const facebookLink = screen.getByTestId("mock-image-link-facebook");
      expect(facebookLink).toHaveAttribute("href", "https://facebook.com");
    });

    it("renders the Twitter link", () => {
      const twitterLink = screen.getByTestId("mock-image-link-twitter");
      expect(twitterLink).toHaveAttribute("href", "https://twitter.com");
    });

    it("renders the Instagram link", () => {
      const instagramLink = screen.getByTestId("mock-image-link-instagram");
      expect(instagramLink).toHaveAttribute("href", "https://instagram.com");
    });
  });
});
