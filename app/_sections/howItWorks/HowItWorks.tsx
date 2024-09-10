import Steps from "@/components/steps/Steps";
import styles from "./HowItWorks.module.scss";
import Button from "@/components/button/Button";

const HowItWorks = () => {
  return (
    <section className={styles.howItWorks}>
      <Steps title="How it works" />
      <div className={styles.ctaBtn}>
        <Button>Create your plan</Button>
      </div>
    </section>
  );
};

export default HowItWorks;
