import styles from "./Products.module.scss";
import { StaticImageData } from "next/image";
import Image from "next/image";

type ProductItemProps = {
  image: StaticImageData;
  alt: string;
  name: string;
  description: string;
};

const ProductItem = ({ image, alt, name, description }: ProductItemProps) => {
  return (
    <li className={styles.productItem}>
      <div className={`${styles.productCard} flex`}>
        <Image src={image} alt={alt} />
        <div>
          <h3 className={`${styles.productName} ff-serif`}>{name}</h3>
          <p className={styles.productDescription}>{description}</p>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
