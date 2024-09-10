import Button from "@/components/button/Button";
import styles from "./Hero.module.scss";
import Link from "next/link";

const Hero = () => {
  const navigateToCreatePlan = () => {};

  return (
    <section
      id="hero-section"
      className={`${styles.hero} container text-light`}
    >
      <div className={styles.content}>
        <h1 className={`${styles.title} ff-serif`}>
          Great coffee made simple.
        </h1>
        <p className={`${styles.description} fw-300`}>
          Start your mornings with the world's best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <Button>
          <Link href="/create-plan">Create your plan</Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
