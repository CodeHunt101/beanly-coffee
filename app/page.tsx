import Hero from "./_sections/hero/Hero";
import Products from "./_sections/products/products";

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
