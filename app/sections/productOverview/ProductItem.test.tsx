import { render, screen } from "@testing-library/react";
import ProductItem from "./ProductItem";

describe("ProductItem component", () => {
  const mockProps = {
    image: {
      src: "/path/to/mockImage",
      height: 100,
      width: 100,
    },
    alt: "Mock Alt Text",
    name: "Test Product",
    description: "This is a test product description.",
  };

  describe("Rendering structure", () => {
    it("should render the product image with the correct alt text", () => {
      render(<ProductItem {...mockProps} />);
      const img = screen.getByAltText(mockProps.alt);
      expect(img).toBeInTheDocument();
    });

    it("should render the product name", () => {
      render(<ProductItem {...mockProps} />);
      const name = screen.getByText(mockProps.name);
      expect(name).toBeInTheDocument();
    });

    it("should render the product description", () => {
      render(<ProductItem {...mockProps} />);
      const description = screen.getByText(mockProps.description);
      expect(description).toBeInTheDocument();
    });
  });

  describe("CSS classes", () => {
    it("should apply the correct class to the product item wrapper", () => {
      render(<ProductItem {...mockProps} />);
      const listItem = screen.getByRole("listitem");
      expect(listItem).toHaveClass("productItem");
    });

    it("should apply the correct class to the product card", () => {
      render(<ProductItem {...mockProps} />);
      const productCard = screen.getByRole("listitem").firstChild;
      expect(productCard).toHaveClass("productCard");
    });

    it("should apply the correct class to the product name", () => {
      render(<ProductItem {...mockProps} />);
      const name = screen.getByText(mockProps.name);
      expect(name).toHaveClass("productName");
    });

    it("should apply the correct class to the product description", () => {
      render(<ProductItem {...mockProps} />);
      const description = screen.getByText(mockProps.description);
      expect(description).toHaveClass("productDescription");
    });
  });
});
