import { render, screen } from "@testing-library/react";
import HeroSection from "./HeroSection";

// Mock the ButtonLink component
jest.mock("@/components/buttons/ButtonLink", () => ({ children }: any) => (
  <a href="hrefLink">{children}</a>
));

describe("Hero Component", () => {
  it("renders the title correctly", () => {
    render(<HeroSection />);
    const title = screen.getByRole("heading", { level: 1 });
    expect(title).toHaveTextContent("About us");
  });

  it("renders the description correctly", () => {
    render(<HeroSection />);
    const description = screen.getByText(
      /Coffeeroasters began its journey of exotic discovery in 1999/i,
    );
    expect(description).toBeInTheDocument();
  });
});
