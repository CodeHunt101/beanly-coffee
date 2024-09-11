import styles from "./Hero.module.scss";
import ButtonLink from "@/components/buttons/ButtonLink";

const Hero = () => {
  return (
    <section id="hero-section" className={`${styles.hero} text-light`}>
      <div className={styles.content}>
        <h1 className={`${styles.title} ff-serif`}>
          Great coffee made simple.
        </h1>
        <p className={`${styles.description} fw-300`}>
          Start your mornings with the world's best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <ButtonLink href="/create-plan">Create your plan</ButtonLink>
      </div>
    </section>
  );
};

export default Hero;
