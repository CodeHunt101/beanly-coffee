import Link from "next/link";
import styles from "./CreatePlanSection.module.scss";
import { useContext } from "react";
import { PlanContext, PlanContextType } from "@/app/_context/planContext";

const StepList = () => {
  const { selectedOptions } = useContext<PlanContextType>(PlanContext);
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
            <span
              className={`${styles.number} ${
                selectedOptions[`step-${index + 1}`] ? styles.selected : ""
              }`}
            >
              0{index + 1}
            </span>
            <span className={styles.step}>{step}</span>
          </Link>
        </li>
      ))}
    </ol>
  );
};

export default StepList;
