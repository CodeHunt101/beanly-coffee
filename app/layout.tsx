import "@/styles/global.scss";
import { barlow, fraunces } from "./utils/fonts";

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
