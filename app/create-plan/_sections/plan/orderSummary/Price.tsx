import styles from "../CreatePlanSection.module.scss";

type PriceProps = {
  prefix?: string;
};

const Price = ({ prefix = "" }: PriceProps) => (
  <p className={styles.price}>{prefix ? prefix + " " : ""}$14.00 / mo</p>
);

export default Price;
