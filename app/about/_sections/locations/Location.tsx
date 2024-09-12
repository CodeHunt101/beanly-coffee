import styles from "./Locations.module.scss";
import { StaticImageData } from "next/image";
import Image from "next/image";

type LocationProps = {
  image: StaticImageData;
  alt: string;
  name: string;
  location: {
    address: string;
    city: string;
    state: string;
    phone: string;
  };
};

const Location = ({ image, alt, name, location }: LocationProps) => {
  const { address, city, state, phone } = location;
  return (
    <li className={styles.countryCard}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={alt} className={styles.countryImage} />
      </div>
      <div className={styles.countryInfo}>
        <h3 className={`${styles.countryName} ff-serif`}>{name}</h3>
        <div className={styles.locationInfo}>
          <p>{address}</p>
          <p>{city}</p>
          <p>{state}</p>
          <p>{phone}</p>
        </div>
      </div>
    </li>
  );
};

export default Location;
