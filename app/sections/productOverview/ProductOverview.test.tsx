import { render, screen } from "@testing-library/react";
import ProductOverview from "./ProductOverview";

jest.mock("./ProductList", () => () => <ul data-testid="mock-product-list" />);

describe("ProductOverview component", () => {
  it("should render the header with the correct class", () => {
    render(<ProductOverview />);
    const header = screen.getByRole("banner");
    expect(header).toHaveClass("header");
  });

  it("should render the title with correct text", () => {
    render(<ProductOverview />);
    const title = screen.getByText("Our Collection");
    expect(title).toBeInTheDocument();
  });

  it("should apply the correct class to the title element", () => {
    render(<ProductOverview />);
    const title = screen.getByText("Our Collection");
    expect(title).toHaveClass("title");
  });

  it("should render the ProductList component", () => {
    render(<ProductOverview />);
    const productList = screen.getByTestId("mock-product-list");
    expect(productList).toBeInTheDocument();
  });
});
