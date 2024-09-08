import { render, screen } from "@testing-library/react";
import ProductList from "./ProductList";

const mockProducts = [
  {
    image: "/path/to/mock-image-gran-espresso.png",
    alt: "Gran Espresso product",
    name: "Gran Espresso",
    description:
      "Light and flavorful blend with cocoa and black pepper for an intense experience.",
  },
  {
    image: "/path/to/mock-image-planalto.png",
    alt: "Planalto product",
    name: "Planalto",
    description:
      "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.",
  },
  {
    image: "/path/to/mock-image-piccollo.png",
    alt: "Piccollo product",
    name: "Piccollo",
    description:
      "Mild and smooth blend featuring notes of toasted almond and dried cherry.",
  },
  {
    image: "/path/to/mock-image-danche.png",
    alt: "Danche product",
    name: "Danche",
    description:
      "Ethiopian hand-harvested blend densely packed with vibrant fruit notes.",
  },
];

jest.mock("./ProductItem", () => ({ image, alt, name, description }: any) => (
  <li>
    <img src={image} alt={alt} />
    <h3>{name}</h3>
    <p>{description}</p>
  </li>
));

describe("ProductList component", () => {
  it("should render the product list container with the correct class", () => {
    render(<ProductList />);
    const productList = screen.getByRole("list");
    expect(productList).toHaveClass("productList");
  });

  it("should render the correct number of ProductItem components", () => {
    render(<ProductList />);
    const productItems = screen.getAllByRole("listitem");
    expect(productItems.length).toBe(mockProducts.length);
  });

  describe("Rendering individual products", () => {
    mockProducts.forEach((product) => {
      it(`should render the ${product.name} product with correct name`, () => {
        render(<ProductList />);
        const productName = screen.getByText(product.name);
        expect(productName).toBeInTheDocument();
      });

      it(`should render the ${product.name} product with correct description`, () => {
        render(<ProductList />);
        const productDescription = screen.getByText(product.description);
        expect(productDescription).toBeInTheDocument();
      });

      it(`should render the ${product.name} product with correct alt text for the image`, () => {
        render(<ProductList />);
        const productImage = screen.getByAltText(product.alt);
        expect(productImage).toBeInTheDocument();
      });
    });
  });
});
