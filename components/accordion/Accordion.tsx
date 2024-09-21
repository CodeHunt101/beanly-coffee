import { ReactNode } from "react";
import styles from "./Accordion.module.scss";

const Accordion = ({ children }: { children: ReactNode }) => (
  <div className={styles.accordion} role="group">
    {children}
  </div>
);

export default Accordion;
