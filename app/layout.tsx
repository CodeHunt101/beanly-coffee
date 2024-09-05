import "@/styles/global.scss";
import { barlow, fraunces } from "./utils/fonts";
import { Metadata } from "next";

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
      <body className={`${barlow} ${fraunces}`}>{children}</body>
    </html>
  );
}
