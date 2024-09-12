import styles from "./Locations.module.scss";
import LocationList from "./LocationList";

const Locations = () => {
  return (
    <section className={styles.locations}>
      <header className={styles.header}>
        <h2 className={`${styles.title} ff-serif`}>Our headquarters</h2>
      </header>
      <LocationList />
    </section>
  );
};

export default Locations;
