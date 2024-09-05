import "@/styles/global.scss";
import { barlow, fraunces } from "./utils/fonts";
import { Metadata } from "next";
import styles from "./layout.module.scss";
import Link from "next/link";
import { Path } from "./utils/types";
import logo from "@/public/assets/shared/desktop/logo.svg";
import Image from "next/image";
import { Suspense } from "react";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Beanly",
  description: "", //TODO: add description
  // metadataBase: new URL('/') Not needed for vercel
  authors: [{ name: "Harold Torres Marino" }],
  creator: "Harold Torres Marino",
  publisher: "Harold Torres Marino",
  twitter: {
    card: "summary_large_image",
    title: "Beanly",
    description: "", //TODO: add description
    creator: "Harold Torres Marino",
    // images: '{domain}/opengraph-image.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${barlow} ${fraunces} container`}>
        {/* <a href="#main-content" className="skip-link">
          Skip to main content
        </a> */}
        <header id={styles.mainHeader} className="sticky">
          <section className={`${styles.menu} flex justify-space-between`}>
            <div className={`${styles.logo}`}>
              <Link href={Path.HOME}>
                <Image src={logo} alt="beanly logo" priority />
              </Link>
            </div>
            <Suspense fallback={<div>Loading navigation...</div>}>
              <NavBar />
            </Suspense>
          </section>
        </header>
        {children}
      </body>
    </html>
  );
}
