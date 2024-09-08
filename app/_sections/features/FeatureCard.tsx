import styles from "./Features.module.scss";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type FeatureCardProps = {
  icon: StaticImport;
  alt?: string;
  title: string;
  description: string;
};

const FeatureCard = ({
  icon,
  title,
  description,
  alt = "",
}: FeatureCardProps) => {
  return (
    <li className={styles.featureItem}>
      <div className={`${styles.featureCard} flex`}>
        <Image src={icon} alt={alt} />
        <div className={styles.featureContent}>
          <h3 className={`${styles.featureTitle} ff-serif`}>{title}</h3>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </div>
    </li>
  );
};

export default FeatureCard;
