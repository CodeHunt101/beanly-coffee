import { ReactNode } from "react";
import styles from "./Buttons.module.scss";
import Link from "next/link";

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
};

const ButtonLink = ({ children, href }: ButtonLinkProps) => {
  return (
    <Link
      role="button"
      className={`${styles.btn} bg-primary ff-serif`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
