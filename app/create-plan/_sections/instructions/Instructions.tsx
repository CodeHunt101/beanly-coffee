import Steps from "@/components/steps/Steps";
import styles from "./Instructions.module.scss";

const Instructions = () => (
  <section
    className={styles.instructions}
    role="region"
    aria-label="Instructions Section"
  >
    <div className={styles.content}>
      <Steps theme="dark" stepsHeadingLevel="h2" />
    </div>
  </section>
);

export default Instructions;
