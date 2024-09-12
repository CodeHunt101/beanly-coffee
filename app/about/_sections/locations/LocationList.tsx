import styles from "./Locations.module.scss";
import australiaImage from "@/public/assets/about/desktop/illustration-australia.svg";
import canadaImage from "@/public/assets/about/desktop/illustration-canada.svg";
import ukImage from "@/public/assets/about/desktop/illustration-uk.svg";
import Location from "./Location";

const countries = [
  {
    image: ukImage,
    alt: "Country of The United Kingdom",
    name: "United Kingdom",
    location: {
      address: "68 Asfordby Rd",
      city: "Alcaston",
      state: "SY6 1YA",
      phone: "+44 1241 918425",
    },
  },
  {
    image: canadaImage,
    alt: "Country of Canada",
    name: "Canada",
    location: {
      address: "1528 Eglinton Avenue",
      city: "Toronto",
      state: "Ontario M4P 1A6",
      phone: "+1 416 485 2997",
    },
  },
  {
    image: australiaImage,
    alt: "Country of Australia",
    name: "Australia",
    location: {
      address: "68 Asfordby Rd",
      city: "Kewell",
      state: "Victoria",
      phone: "+61 4 9928 3629",
    },
  },
];

const LocationList = () => {
  return (
    <ul className={`${styles.countries}`}>
      {countries.map((country) => (
        <Location
          key={country.name}
          image={country.image}
          alt={country.alt}
          name={country.name}
          location={country.location}
        />
      ))}
    </ul>
  );
};

export default LocationList;
