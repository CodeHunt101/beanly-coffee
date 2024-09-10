import styles from "./Products.module.scss";
import ProductList from "./ProductList";

const Products = () => {
  return (
    <section className={`${styles.products}`}>
      <header className={styles.header}>
        <h2 className={`${styles.title} ff-serif lowercase`}>Our Collection</h2>
      </header>
      <ProductList />
    </section>
  );
};

export default Products;
