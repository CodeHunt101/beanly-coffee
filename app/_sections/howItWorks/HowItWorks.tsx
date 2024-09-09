import Steps from "@/components/steps/Steps";
import styles from "./HowItWorks.module.scss";
import Button from "@/components/button/Button";

const HowItWorks = () => {
  return (
    <section className={styles.howItWorks}>
      <header className={styles.header}>
        <h2 className={`${styles.title} ff-serif fs-450 text-neutral`}>
          How it works
        </h2>
      </header>
      <Steps />
      <div className={styles.ctaBtn}>
        <Button>Create your plan</Button>
      </div>
    </section>
  );
};

export default HowItWorks;
