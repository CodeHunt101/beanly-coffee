import styles from "./Steps.module.scss";

type StepProps = {
  number: string;
  title: string;
  description: string;
  theme: "light" | "dark";
};

const Step = ({ number, title, description, theme }: StepProps) => {
  return (
    <li
      className={`${styles.stepItem} ${theme === "light" ? styles.light : styles.dark}`}
    >
      <span className={`${styles.circle}`}></span>
      <div className={styles.stepContent}>
        <div className={`${styles.stepNumber} ff-serif fs-700`}>{number}</div>
        <h3 className={`${styles.stepTitle} ff-serif`}>{title}</h3>
        <p className={styles.stepDescription}>{description}</p>
      </div>
    </li>
  );
};

export default Step;
