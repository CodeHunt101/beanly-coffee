import Steps from "@/components/steps/Steps";
import styles from "./Instructions.module.scss";

const Instructions = () => {
  return (
    <section className={styles.instructions}>
      <div className={styles.content}>
        <Steps theme="dark" />
      </div>
    </section>
  );
};

export default Instructions;
