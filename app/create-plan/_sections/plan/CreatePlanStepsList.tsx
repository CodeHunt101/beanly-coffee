import React, { useContext, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import styles from "./CreatePlanSection.module.scss";
import { stepLinks } from "./content";
import { PlanContext } from "@/app/_context/planContext";
import { Step } from "@/app/_utils/types";

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
    <nav>
      <ol className={`${styles.stepList} ff-serif`}>
        {stepLinks.map((stepLink, index) => {
          const step = `step-${index + 1}` as Step;
          const isSelected = !!selectedOptions[step];
          const isActive = activeStep === index;

          return (
            <li key={stepLink} className={styles.stepListItem}>
              <Link href={`#${step}`}>
                <span
                  className={`${styles.number} ${isSelected ? styles.selected : ""}`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={`${styles.step} ${isActive ? styles.active : ""}`}
                >
                  {stepLink}
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default CreatePlanStepList;
