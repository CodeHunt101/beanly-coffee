import { render, screen } from "@testing-library/react";
import Products from "./Products";

jest.mock("./ProductList", () => () => <ul data-testid="mock-product-list" />);

describe("Products component", () => {
  it("should render the header with the correct class", () => {
    render(<Products />);
    const header = screen.getByRole("banner");
    expect(header).toHaveClass("header");
  });

  it("should render the title with correct text", () => {
    render(<Products />);
    const title = screen.getByText("Our Collection");
    expect(title).toBeInTheDocument();
  });

  it("should apply the correct class to the title element", () => {
    render(<Products />);
    const title = screen.getByText("Our Collection");
    expect(title).toHaveClass("title");
  });

  it("should render the ProductList component", () => {
    render(<Products />);
    const productList = screen.getByTestId("mock-product-list");
    expect(productList).toBeInTheDocument();
  });
});
