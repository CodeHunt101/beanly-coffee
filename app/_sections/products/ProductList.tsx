import styles from "./Products.module.scss";
import ProductItem from "./ProductItem";
import { products } from "./content";

const ProductList = () => (
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

export default ProductList;
