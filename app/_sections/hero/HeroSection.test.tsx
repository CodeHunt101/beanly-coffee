import { render, screen } from "@testing-library/react";
import Hero from "./HeroSection";
import HeroSection from "./HeroSection";

// Mock the Button component
jest.mock("@/components/buttons/ButtonLink", () => ({ children }: any) => (
  <a href="hrefLink">{children}</a>
));

describe("Hero Component", () => {
  // it("renders the hero section", () => {
  //   render(<HeroSection />);
  //   const heroSection = screen.getByRole("region", { name: /hero-section/i });
  //   expect(heroSection).toBeInTheDocument();
  // });

  it("renders the title correctly", () => {
    render(<HeroSection />);
    const title = screen.getByRole("heading", { level: 1 });
    expect(title).toHaveTextContent("Great coffee made simple.");
  });

  it("renders the description correctly", () => {
    render(<HeroSection />);
    const description = screen.getByText(
      /Start your mornings with the world's best coffees/i,
    );
    expect(description).toBeInTheDocument();
  });

  it("renders the Button component with correct text", () => {
    render(<HeroSection />);
    const button = screen.getByRole("link", { name: /Create your plan/i });
    expect(button).toBeInTheDocument();
  });

  it(`contains a link to the desired page`, () => {
    render(<HeroSection />);
    const link = screen.getByRole("link", { name: /Create your plan/i });
    expect(link).toHaveAttribute("href", "hrefLink");
  });
});
