import styles from "./Locations.module.scss";
import LocationList from "./LocationList";

const Locations = () => {
  return (
    <section className={styles.locations}>
      <h2 className={`${styles.title} ff-serif`}>Our headquarters</h2>
      <LocationList />
    </section>
  );
};

export default Locations;
