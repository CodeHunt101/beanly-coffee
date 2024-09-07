"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import styles from "./Accordion.module.scss";
import arrow from "@/public/assets/plan/desktop/icon-arrow.svg";
import Image from "next/image";
import useScreenSizeHandler from "@/hooks/useScreenSizeHandler";
import { BreakPoints } from "@/app/utils/types";

type AccordionItemProps = {
  title: string;
  disabled?: boolean;
  children: ReactNode;
};

const AccordionItem = ({
  title,
  children,
  disabled = false,
}: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  // Toggle the accordion and calculate the max height
  const toggleAccordion = () => {
    setIsOpen(!isOpen);

    // If contentRef is set, update the maxHeight dynamically
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      setMaxHeight(isOpen ? "0px" : `${contentHeight}px`);
    }
  };

  // Ensure that maxHeight is updated correctly when the accordion opens
  useEffect(() => {
    if (isOpen && contentRef.current) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    }
  }, [isOpen]);

  // Reset accordion if user resizes screen
  useScreenSizeHandler(setIsOpen, false, BreakPoints.SM);

  return (
    <div className={`${styles["accordion-item"]}`}>
      <button
        className={`${styles["accordion-toggle"]} bg-background`}
        onClick={toggleAccordion}
        disabled={disabled}
      >
        <span
          className={`${styles["accordion-label"]} ${isOpen ? `${styles["open"]}` : ""} ff-serif`}
        >
          {title}
        </span>
        <Image
          className={`${styles["accordion-icon"]} ${isOpen ? `${styles["open"]}` : ""}`}
          src={arrow}
          alt={"arrow"}
        />
      </button>
      <div
        data-testid="accordion-content"
        ref={contentRef}
        className={`${styles["accordion-content"]} ${isOpen ? `${styles["open"]}` : ""}`}
        style={{ maxHeight, transition: "max-height 0.3s ease" }}
      >
        {children}
      </div>
    </div>
  );
};

export default AccordionItem;
