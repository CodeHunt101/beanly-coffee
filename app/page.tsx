import Features from "./_sections/features/Features";
import Products from "./_sections/products/Products";
import HowItWorks from "./_sections/howItWorks/HowItWorks";
import HeroSection from "./_sections/hero/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page | Beanly Coffee",
};

export default function Home() {
  return (
    <main id="main-content" className="container">
      <HeroSection />
      <Products />
      <Features />
      <HowItWorks />
    </main>
  );
}
