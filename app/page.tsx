import Features from "./_sections/features/Features";
import Products from "./_sections/products/Products";
import HowItWorks from "./_sections/howItWorks/HowItWorks";
import HeroSection from "./_sections/hero/HeroSection";

export const metadata = {
  title: "Beanly Home Page",
};

export default function Home() {
  return (
    <main className="container">
      <HeroSection />
      <Products />
      <Features />
      <HowItWorks />
    </main>
  );
}
