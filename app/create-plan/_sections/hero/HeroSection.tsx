import Hero from "@/components/hero/Hero";
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  const { hero, content, title, description } = styles;
  return (
    <section id="hero-section" className={`${hero} text-light`}>
      <Hero
        title="Create plan"
        description="Coffee the way you wanted it to be. For coffee delivered tomorrow, or next week. 
          For whatever brew method you use. For choice, for convenience, for quality."
        linkButton={false}
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
