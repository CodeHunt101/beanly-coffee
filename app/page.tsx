import Hero from "./sections/hero/Hero";
import Products from "./sections/products/products";

export const metadata = {
  title: "Beanly",
};

export default function Page() {
  return (
    <main>
      <Hero />
      <Products />
    </main>
  );
}
