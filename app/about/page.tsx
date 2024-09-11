import Commitment from "./_sections/commitment/Commitment";
import HeroSection from "./_sections/hero/HeroSection";

export const metadata = {
  title: "Beanly About Page",
};

export default function About() {
  return (
    <main>
      <HeroSection />
      <Commitment />
    </main>
  );
}
