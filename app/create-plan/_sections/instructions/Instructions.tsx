import Steps from "@/components/steps/Steps";
import styles from "./Instructions.module.scss";

const Instructions = () => {
  return (
    <section className={styles.instructions}>
      <Steps theme="dark" />
    </section>
  );
};

export default Instructions;
