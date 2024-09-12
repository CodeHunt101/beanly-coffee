import HeroSection from "./_sections/hero/HeroSection";
import Instructions from "./_sections/instructions/Instructions";

export const metadata = {
  title: "Beanly Create Plan Page",
};

export default function CreatePlan() {
  return (
    <main>
      <HeroSection />
      <Instructions />
    </main>
  );
}
