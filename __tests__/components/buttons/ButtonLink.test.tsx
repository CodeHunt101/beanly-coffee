import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ButtonLink from "@/components/buttons/ButtonLink";

describe("ButtonLink component", () => {
  it("renders the children correctly", () => {
    render(<ButtonLink href="/test">Test Button</ButtonLink>);
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });

  it("has the correct href attribute", () => {
    render(<ButtonLink href="/test">Test Button</ButtonLink>);

    const linkElement = screen.getByRole("button", { name: /test button/i });
    expect(linkElement).toHaveAttribute("href", "/test");
  });

  it("has the 'bg-primary' class", () => {
    render(<ButtonLink href="/test">Test Button</ButtonLink>);

    const linkElement = screen.getByRole("button", { name: /test button/i });
    expect(linkElement).toHaveClass("bg-primary");
  });

  it("has the 'ff-serif' class", () => {
    render(<ButtonLink href="/test">Test Button</ButtonLink>);

    const linkElement = screen.getByRole("button", { name: /test button/i });
    expect(linkElement).toHaveClass("ff-serif");
  });
});
