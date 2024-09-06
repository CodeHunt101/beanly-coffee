import { ReactNode } from "react";
import styles from "./Accordion.module.scss";

const Accordion = ({ children }: { children: ReactNode }) => {
  return <div className={`${styles.accordion}`}>{children}</div>;
};

export default Accordion;
