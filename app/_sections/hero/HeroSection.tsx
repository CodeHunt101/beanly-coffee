import Hero from "@/components/hero/Hero";
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  const { hero, content, title, description } = styles;
  return (
    <section id="hero-section" className={`${hero} text-light`}>
      <Hero
        title="Great coffee made simple."
        description="Start your mornings with the world's best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule."
        linkButton
        linkButtonContent="Create your plan"
        styles={{
          content,
          title,
          description,
        }}
      />
    </section>
  );
};

export default HeroSection;
