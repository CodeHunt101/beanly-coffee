import "@/styles/global.scss";
import { barlow, fraunces } from "@/app/_utils/fonts";
import { Metadata } from "next";
import Header from "./_layout/header/Header";
import Footer from "./_layout/footer/Footer";

export const metadata: Metadata = {
  description:
    "Discover the world’s finest artisan coffees with Beanly Coffee. Customize your coffee plan, choose from expertly curated blends, and enjoy freshly roasted beans delivered to your door with free shipping. Flexible subscriptions and exclusive benefits for coffee lovers.",
  authors: [{ name: "Harold Torres Marino" }],
  creator: "Harold Torres Marino",
  publisher: "Harold Torres Marino",
  keywords: [
    "artisan coffee",
    "coffee subscription",
    "fresh coffee delivery",
    "customizable coffee plans",
    "specialty coffee",
    "coffee blends",
    "free shipping",
    "ethical coffee",
    "coffee roasters",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${barlow} ${fraunces}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
