import HeadingTag from "../headingTag/HeadingTag";
import styles from "./Steps.module.scss";

export type StepProps = {
  number: string;
  title: string;
  description: string;
  theme: "light" | "dark";
  headingLevel?: "h2" | "h3" | "h4" | "h5";
};

const Step = ({
  number,
  title,
  description,
  theme,
  headingLevel = "h3",
}: StepProps) => (
  <li
    className={`${styles.stepItem} ${theme === "light" ? styles.light : styles.dark}`}
  >
    <span className={`${styles.circle}`}></span>
    <div className={styles.stepContent}>
      <strong className={`${styles.stepNumber} ff-serif fs-700`}>
        {number}
      </strong>
      <HeadingTag
        level={headingLevel}
        className={`${styles.stepTitle} ff-serif`}
      >
        {title}
      </HeadingTag>
      <p className={styles.stepDescription}>{description}</p>
    </div>
  </li>
);

export default Step;
