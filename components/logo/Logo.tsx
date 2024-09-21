import Link from "next/link";
import Image from "next/image";
import { Path } from "@/app/_utils/types";
import logoHeader from "@/public/assets/shared/desktop/logo-header.svg";
import logoFooter from "@/public/assets/shared/desktop/logo-footer.svg";

type LogoProps = {
  footer?: boolean;
};

const Logo = ({ footer = false }: LogoProps) => (
  <Link href={Path.HOME} aria-label="Go to Home page">
    <Image
      src={footer ? logoFooter : logoHeader}
      alt="beanly logo"
      priority={!footer}
    />
  </Link>
);

export default Logo;
