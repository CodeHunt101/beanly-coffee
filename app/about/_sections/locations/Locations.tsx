import styles from "./Locations.module.scss";
import LocationList from "./LocationList";

const Locations = () => {
  return (
    <section
      className={styles.locations}
      aria-labelledby="location-section-heading"
    >
      <h2 id="location-section-heading" className={`${styles.title} ff-serif`}>
        Our headquarters
      </h2>
      <LocationList />
    </section>
  );
};

export default Locations;
