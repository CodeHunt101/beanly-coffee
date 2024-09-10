import { fireEvent, render, screen } from "@testing-library/react";
import Hero from "./Hero";
import { Path } from "@/app/_utils/types";

// Mock the Button component
jest.mock("../../../components/button/Button", () => ({ children }: any) => (
  <button>{children}</button>
));

describe("Hero Component", () => {
  // it("renders the hero section", () => {
  //   render(<Hero />);
  //   const heroSection = screen.getByRole("region", { name: /hero-section/i });
  //   expect(heroSection).toBeInTheDocument();
  // });

  it("renders the title correctly", () => {
    render(<Hero />);
    const title = screen.getByRole("heading", { level: 1 });
    expect(title).toHaveTextContent("Great coffee made simple.");
  });

  it("renders the description correctly", () => {
    render(<Hero />);
    const description = screen.getByText(
      /Start your mornings with the world's best coffees/i,
    );
    expect(description).toBeInTheDocument();
  });

  it("renders the Button component with correct text", () => {
    render(<Hero />);
    const button = screen.getByRole("button", { name: /Create your plan/i });
    expect(button).toBeInTheDocument();
  });

  it(`contains a link to the ${Path.CREATE_PLAN} page`, () => {
    render(<Hero />);
    const link = screen.getByRole("link", { name: /Create your plan/i });
    expect(link).toHaveAttribute("href", Path.CREATE_PLAN);
  });
});
