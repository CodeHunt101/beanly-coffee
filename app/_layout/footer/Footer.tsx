import Logo from "@/components/logo/Logo";
import styles from "./Footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Path } from "@/app/utils/types";
import FacebookLogo from "@/public/assets/shared/desktop/icon-facebook.svg";
import TwitterLogo from "@/public/assets/shared/desktop/icon-twitter.svg";
import InstagramLogo from "@/public/assets/shared/desktop/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className={`${styles.footer} container bg-dark`}>
      <div className={styles.footerContent}>
        <Logo footer />
        <nav>
          <ul
            className={`${styles.navList} uppercase fs-100 letter-spacing-1 fw-700`}
          >
            <li>
              <a href={Path.HOME} className={styles.navLink}>
                Home
              </a>
            </li>
            <li>
              <a href={Path.NOT_READY} className={styles.navLink}>
                About Us
              </a>
            </li>
            <li>
              <a href={Path.NOT_READY} className={styles.navLink}>
                Create Your Plan
              </a>
            </li>
          </ul>
        </nav>

        <ul className={styles.socialList}>
          <li>
            <Link href="https://facebook.com">
              <Image src={FacebookLogo} alt="Facebook" />
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com">
              <Image src={TwitterLogo} alt="Twitter" />
            </Link>
          </li>
          <li>
            <Link href="https://instagram.com">
              <Image src={InstagramLogo} alt="Instagram" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
