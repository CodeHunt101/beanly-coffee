import Steps from "@/components/steps/Steps";
import styles from "./HowItWorks.module.scss";
import Button from "@/components/button/Button";
import Link from "next/link";

const HowItWorks = () => {
  return (
    <section className={styles.howItWorks}>
      <Steps title="How it works" />
      <div className={styles.ctaBtn}>
        <Button>
          <Link href="/create-plan">Create your plan</Link>
        </Button>
      </div>
    </section>
  );
};

export default HowItWorks;
