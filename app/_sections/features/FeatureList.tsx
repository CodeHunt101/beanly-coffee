import { features } from "./content";
import FeatureCard from "./FeatureCard";
import styles from "./Features.module.scss";

const FeatureList = () => {
  return (
    <ul className={styles.featureList}>
      {features.map((feature) => (
        <FeatureCard
          key={feature.title}
          icon={feature.icon}
          alt={feature.alt}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </ul>
  );
};

export default FeatureList;
