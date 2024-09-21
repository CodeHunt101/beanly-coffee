import Steps from "@/components/steps/Steps";
import styles from "./HowItWorks.module.scss";
import ButtonLink from "@/components/buttons/ButtonLink";
import { Path } from "@/app/_utils/types";

const HowItWorks = () => (
  <section className={styles.howItWorks} aria-label="How the service works">
    <Steps title="How it works" />
    <div className={styles.ctaBtn}>
      <ButtonLink href={Path.CREATE_PLAN}>Create your plan</ButtonLink>
    </div>
  </section>
);

export default HowItWorks;
