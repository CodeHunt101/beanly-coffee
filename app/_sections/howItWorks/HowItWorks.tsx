import Steps from "@/components/steps/Steps";
import styles from "./HowItWorks.module.scss";
import ButtonLink from "@/components/buttons/ButtonLink";

const HowItWorks = () => {
  return (
    <section className={styles.howItWorks}>
      <Steps title="How it works" />
      <div className={styles.ctaBtn}>
        <ButtonLink href="/create-plan">Create your plan</ButtonLink>
      </div>
    </section>
  );
};

export default HowItWorks;
