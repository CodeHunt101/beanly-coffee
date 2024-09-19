import { Metadata } from "next";
import Commitment from "./_sections/commitment/Commitment";
import HeroSection from "./_sections/hero/HeroSection";
import Locations from "./_sections/locations/Locations";
import Quality from "./_sections/quality/Quality";

export const metadata: Metadata = {
  title: "About Us | Beanly Coffee",
};

export default function About() {
  return (
    <main className="container">
      <HeroSection />
      <Commitment />
      <Quality />
      <Locations />
    </main>
  );
}
