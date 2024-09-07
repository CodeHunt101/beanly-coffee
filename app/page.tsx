import Hero from "./sections/hero/Hero";
import ProductOverview from "./sections/productOverview/ProductOverview";

export const metadata = {
  title: "Beanly",
};

export default function Page() {
  return (
    <main>
      <Hero />
      <ProductOverview />
    </main>
  );
}
