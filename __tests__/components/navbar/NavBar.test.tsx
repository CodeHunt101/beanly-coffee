import { render, screen, fireEvent } from "@testing-library/react";
import NavBar from "@/components/navbar/NavBar";
import { usePathname } from "next/navigation";

// Mock the usePathname hook from next/navigation
jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("NavBar Component", () => {
  const renderNavBar = () => render(<NavBar />);

  beforeEach(() => {
    (usePathname as jest.Mock).mockReturnValue("/");
  });

  describe("Initial Rendering", () => {
    it("renders the NavBar component", () => {
      renderNavBar();
      const navWrapper = screen.getByTestId("nav-wrapper");
      expect(navWrapper).toBeInTheDocument();
    });

    it("renders the hamburger icon initially", () => {
      renderNavBar();
      const hamburgerIcon = screen.getByAltText("Open menu icon");
      expect(hamburgerIcon).toBeInTheDocument();
    });
  });

  describe("Menu Toggling", () => {
    it("menu is closed initially", () => {
      renderNavBar();
      const button = screen.getByRole("button", { name: /open menu/i });
      expect(button).toHaveAttribute("aria-expanded", "false");
    });

    it("menu opens when the hamburger button is clicked", () => {
      renderNavBar();
      const button = screen.getByRole("button", { name: /open menu/i });
      fireEvent.click(button);
      expect(button).toHaveAttribute("aria-expanded", "true");
    });

    it("menu closes when the hamburger button is clicked again", () => {
      renderNavBar();
      const button = screen.getByRole("button", { name: /open menu/i });
      fireEvent.click(button); // Open menu
      fireEvent.click(button); // Close menu
      expect(button).toHaveAttribute("aria-expanded", "false");
    });
  });

  describe("Navigation Items", () => {
    it("renders the correct number of navigation items", () => {
      renderNavBar();
      const navItems = screen.getAllByRole("listitem");
      expect(navItems).toHaveLength(3);
    });

    it("adds 'active' class to the correct link based on pathname", () => {
      (usePathname as jest.Mock).mockReturnValue("/");
      renderNavBar();
      const homeLink = screen.getByText("Home").closest("li");
      expect(homeLink).toHaveClass("active");
    });

    it("does not add 'active' class to non-active links", () => {
      (usePathname as jest.Mock).mockReturnValue("/");
      renderNavBar();
      const aboutLink = screen.getByText("About us").closest("li");
      expect(aboutLink).not.toHaveClass("active");
    });

    it("closes the menu when a navigation link is clicked", () => {
      renderNavBar();
      const button = screen.getByRole("button", { name: /open menu/i });
      fireEvent.click(button);
      const homeLink = screen.getByText("Home");
      fireEvent.click(homeLink);
      expect(button).toHaveAttribute("aria-expanded", "false");
    });
  });

  describe("ARIA Attributes", () => {
    it("has correct aria-controls attribute", () => {
      renderNavBar();
      const button = screen.getByRole("button", { name: /open menu/i });
      expect(button).toHaveAttribute("aria-controls", "primary-navigation");
    });

    it("has aria-expanded set to false when menu is closed", () => {
      renderNavBar();
      const button = screen.getByRole("button", { name: /open menu/i });
      expect(button).toHaveAttribute("aria-expanded", "false");
    });

    it("has aria-expanded set to true when menu is open", () => {
      renderNavBar();
      const button = screen.getByRole("button", { name: /open menu/i });
      fireEvent.click(button);
      expect(button).toHaveAttribute("aria-expanded", "true");
    });
  });

  describe("Screen Size Handling", () => {
    it("applies 'closed' class to nav wrapper by default", () => {
      renderNavBar();
      const navWrapper = screen.getByTestId("nav-wrapper");
      expect(navWrapper).toHaveClass("closed");
    });
  });
});
