import { render, screen, waitFor } from "@testing-library/react";
import Header from "./Header";

// Mock the Logo and NavBar components
jest.mock("../../../components/navbar/NavBar", () => () => (
  <nav data-testid="navbar" />
));
jest.mock("../../../components/logo/Logo", () => () => (
  <div data-testid="logo" />
));

describe("Header Component", () => {
  it("should render the header element with the correct id and class", () => {
    render(<Header />);
    const header = screen.getByRole("banner");
    expect(header).toHaveAttribute("id", expect.stringContaining("mainHeader"));
    expect(header).toHaveClass("container sticky");
  });

  describe("Logo", () => {
    it("should render the Logo component", () => {
      render(<Header />);
      const logo = screen.getByTestId("logo");
      expect(logo).toBeInTheDocument();
    });
  });

  describe("NavBar", () => {
    it("should render the NavBar component inside Suspense", async () => {
      render(<Header />);
      const navbar = await screen.findByTestId("navbar");
      expect(navbar).toBeInTheDocument();
    });

    it("should show fallback content while NavBar is loading", () => {
      const { container } = render(<Header />);

      waitFor(() => {
        const fallback = container.querySelector("div");
        expect(fallback).toHaveTextContent("Loading navigation...");
      });
    });
  });
});
