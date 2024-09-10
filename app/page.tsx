import Hero from "./_sections/hero/Hero";
import Features from "./_sections/features/Features";
import Products from "./_sections/products/Products";
import HowItWorks from "./_sections/howItWorks/HowItWorks";

export const metadata = {
  title: "Beanly",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Products />
      <Features />
      <HowItWorks />
    </main>
  );
}
