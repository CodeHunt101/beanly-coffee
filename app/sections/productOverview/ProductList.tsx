import styles from "./ProductOverview.module.scss";
import granEspressoImage from "@/public/assets/home/desktop/image-gran-espresso.png";
import planaltoImage from "@/public/assets/home/desktop/image-planalto.png";
import picolloImage from "@/public/assets/home/desktop/image-piccollo.png";
import dancheImage from "@/public/assets/home/desktop/image-danche.png";
import ProductItem from "./ProductItem";

const products = [
  {
    image: granEspressoImage,
    alt: "Gran Espresso product",
    name: "Gran Espresso",
    description:
      "Light and flavorful blend with cocoa and black pepper for an intense experience.",
  },
  {
    image: planaltoImage,
    alt: "Planalto product",
    name: "Planalto",
    description:
      "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.",
  },
  {
    image: picolloImage,
    alt: "Piccollo product",
    name: "Piccollo",
    description:
      "Mild and smooth blend featuring notes of toasted almond and dried cherry.",
  },
  {
    image: dancheImage,
    alt: "Danche product",
    name: "Danche",
    description:
      "Ethiopian hand-harvested blend densely packed with vibrant fruit notes.",
  },
];

const ProductList = () => {
  return (
    <ul className={`${styles.productList} flex`}>
      {products.map((product) => (
        <ProductItem
          key={product.name}
          image={product.image}
          alt={product.alt}
          name={product.name}
          description={product.description}
        />
      ))}
    </ul>
  );
};

export default ProductList;
