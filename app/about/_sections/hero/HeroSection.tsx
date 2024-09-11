import Hero from "@/components/hero/Hero";
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  const { hero, content, title, description } = styles;
  return (
    <section id="hero-section" className={`${hero} text-light`}>
      <Hero
        title="About us"
        description="Coffeeroasters began its journey of exotic discovery in 1999, 
          highlighting stories of coffee from around the world. 
          We have since been dedicated to bring the perfect cup 
          - from bean to brew - in every shipment."
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
