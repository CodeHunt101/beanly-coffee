import React, { useContext, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { PlanContext } from "@/app/_context/planContext";
import styles from "./CreatePlanSection.module.scss";
import { stepLinks } from "./content";

const SCROLL_OFFSET = 115;

const CreatePlanStepList = () => {
  const { selectedOptions } = useContext(PlanContext);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + SCROLL_OFFSET;
    const activeIndex = stepLinks.findLastIndex((_, index) => {
      const section = document.getElementById(`step-${index + 1}`);
      return section && section.offsetTop <= scrollPosition;
    });
    setActiveStep(activeIndex !== -1 ? activeIndex : null);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <ol className={`${styles.stepList} ff-serif`} role="navigation">
      {stepLinks.map((step, index) => {
        const stepNumber = index + 1;
        const isSelected = !!selectedOptions[`step-${stepNumber}`];
        const isActive = activeStep === index;

        return (
          <li key={step} className={styles.stepListItem}>
            <Link href={`#step-${stepNumber}`}>
              <span
                className={`${styles.number} ${isSelected ? styles.selected : ""}`}
              >
                {String(stepNumber).padStart(2, "0")}
              </span>
              <span
                className={`${styles.step} ${isActive ? styles.active : ""}`}
              >
                {step}
              </span>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};

export default CreatePlanStepList;
