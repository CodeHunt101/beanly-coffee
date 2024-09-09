import FeatureCard, { FeatureCardProps } from "./FeatureCard";
import styles from "./Features.module.scss";
import coffeeBeanIcon from "@/public/assets/home/desktop/icon-coffee-bean.svg";
import giftIcon from "@/public/assets/home/desktop/icon-gift.svg";
import truckIcon from "@/public/assets/home/desktop/icon-truck.svg";

const features: FeatureCardProps[] = [
  {
    icon: coffeeBeanIcon,
    title: "Best quality",
    description:
      "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
  },
  {
    icon: giftIcon,
    title: "Exclusive benefits",
    description:
      "Special offers and swag when you subscribe, including 30% off your first shipment.",
  },
  {
    icon: truckIcon,
    title: "Free shipping",
    description:
      "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
  },
];

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
