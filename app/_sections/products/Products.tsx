import styles from "./Products.module.scss";
import ProductList from "./ProductList";

const Products = () => (
  <section className={`${styles.products}`} aria-labelledby="products-heading">
    <header className={styles.header}>
      <h2
        id="products-heading"
        className={`${styles.title} ff-serif lowercase`}
      >
        Our Collection
      </h2>
    </header>
    <ProductList />
  </section>
);

export default Products;
