import Link from "next/link";
import styles from "./CreatePlanSection.module.scss";

const StepList = () => {
  const steps = [
    "Preferences",
    "Bean Type",
    "Quantity",
    "Grind Option",
    "Deliveries",
  ];

  return (
    <ol className={`${styles.stepList} ff-serif`}>
      {steps.map((step, index) => (
        <li key={index} className={styles.stepListItem}>
          <Link href={`#question-${index + 1}`}>
            <span className={styles.number}>{`0${index + 1}`}</span>
            <span className={styles.step}>{step}</span>
          </Link>
        </li>
      ))}
    </ol>
  );
};

export default StepList;
