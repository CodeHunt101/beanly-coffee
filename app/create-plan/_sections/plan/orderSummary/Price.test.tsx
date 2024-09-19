import { render, screen } from "@testing-library/react";
import Price from "./Price";

describe("Price component", () => {
  it("renders the priceValue correctly", () => {
    render(<Price priceValue="19.99" />);
    const priceElement = screen.getByText(/19.99/);
    expect(priceElement).toBeInTheDocument();
  });

  it("renders the prefix and priceValue correctly", () => {
    render(<Price prefix="$" priceValue="19.99" />);
    const priceElement = screen.getByText(/\$ 19.99/);
    expect(priceElement).toBeInTheDocument();
  });

  it("applies the correct class from styles", () => {
    const { container } = render(<Price priceValue="19.99" />);
    const priceElement = container.querySelector("p");
    expect(priceElement).toHaveClass("price");
  });

  it("does not display a prefix when it's not provided", () => {
    render(<Price priceValue="19.99" />);
    const priceElement = screen.getByText(/19.99/);
    expect(priceElement.textContent).toBe("19.99 / mo");
  });

  it("displays the prefix when provided", () => {
    render(<Price prefix="$" priceValue="19.99" />);
    const priceElement = screen.getByText(/\$ 19.99/);
    expect(priceElement.textContent).toBe("$ 19.99 / mo");
  });
});
