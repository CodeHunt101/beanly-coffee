"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import styles from "./Accordion.module.scss";
import arrow from "@/public/assets/plan/desktop/icon-arrow.svg";
import Image from "next/image";

type AccordionItemProps = {
  id: string;
  label: string;
  disabled?: boolean;
  children: ReactNode;
  defaultOpen?: boolean;
};

const AccordionItem = ({
  id,
  label,
  children,
  disabled = false,
  defaultOpen = false,
}: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const content = contentRef.current;
    if (content) {
      content.style.maxHeight = isOpen ? `${content.scrollHeight}px` : "0px";
    }
  }, [isOpen]);

  return (
    <div id={id} className={styles.accordionItem}>
      <button
        className={`${styles.accordionToggle} bg-light`}
        onClick={toggleAccordion}
        disabled={disabled}
        aria-expanded={isOpen}
        aria-controls={`${label}-content`}
      >
        <span
          className={`${styles.accordionLabel} ${isOpen ? styles.open : ""} ff-serif`}
        >
          {label}
        </span>
        <Image
          className={`${styles.accordionIcon} ${isOpen ? styles.open : ""}`}
          src={arrow}
          alt="toggle icon"
          aria-hidden="true"
        />
      </button>
      <div
        data-testid="accordion-content"
        id={`${label}-content`}
        ref={contentRef}
        className={`${styles.accordionContent} ${isOpen ? styles.open : ""}`}
      >
        {children}
      </div>
    </div>
  );
};

export default AccordionItem;
