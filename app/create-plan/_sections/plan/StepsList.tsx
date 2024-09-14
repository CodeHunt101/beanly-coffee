import Link from "next/link";
import styles from "./CreatePlanSection.module.scss";
import { useContext, useEffect, useState } from "react";
import { PlanContext, PlanContextType } from "@/app/_context/planContext";

const StepList = () => {
  const { selectedOptions } = useContext<PlanContextType>(PlanContext);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    "Preferences",
    "Bean Type",
    "Quantity",
    "Grind Option",
    "Deliveries",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 115; // Adjust for the 115px offset
      const sections = steps.map((_, index) =>
        document.getElementById(`question-${index + 1}`),
      );

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveStep(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            <span
              className={`${styles.step} ${activeStep === index ? styles.active : ""}`}
            >
              {step}
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
};

export default StepList;
