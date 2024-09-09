import FeatureList from "./FeatureList";
import styles from "./Features.module.scss";

const Features = () => {
  return (
    <section className={styles.features}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h2 className={`${styles.title} ff-serif`}>Why choose us?</h2>
          <p className={styles.description}>
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </header>
      </div>
      <FeatureList />
    </section>
  );
};

export default Features;
