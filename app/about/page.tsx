import Commitment from "./_sections/commitment/Commitment";
import HeroSection from "./_sections/hero/HeroSection";
import Locations from "./_sections/locations/Locations";
import Quality from "./_sections/quality/Quality";

export const metadata = {
  title: "Beanly About Page",
};

export default function About() {
  return (
    <main>
      <HeroSection />
      <Commitment />
      <Quality />
      <Locations />
    </main>
  );
}
