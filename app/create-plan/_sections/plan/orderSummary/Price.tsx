import styles from "./OrderSummaryModal.module.scss";

type PriceProps = {
  prefix?: string;
  priceValue: string;
};

const Price = ({ prefix = "", priceValue }: PriceProps) => (
  <p className={styles.price}>
    {prefix ? prefix + " " : ""}
    {priceValue} / mo
  </p>
);

export default Price;
