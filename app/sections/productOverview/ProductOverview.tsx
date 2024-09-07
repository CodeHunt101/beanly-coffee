import styles from "./ProductOverview.module.scss";
import ProductList from "./ProductList";

const ProductOverview = () => {
  return (
    <section className={styles.productOverview}>
      <header className={styles.header}>
        <h2 className={`${styles.title} ff-serif lowercase`}>Our Collection</h2>
      </header>
      <ProductList />
    </section>
  );
};

export default ProductOverview;
