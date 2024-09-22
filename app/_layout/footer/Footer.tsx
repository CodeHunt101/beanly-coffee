import Logo from "@/components/logo/Logo";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { Path } from "@/app/_utils/types";
import FacebookLogo from "@/public/assets/shared/desktop/icon-facebook.svg";
import TwitterLogo from "@/public/assets/shared/desktop/icon-twitter.svg";
import InstagramLogo from "@/public/assets/shared/desktop/icon-instagram.svg";
import ImageLink from "@/components/imageLink/ImageLink";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <div className={styles.footerNav}>
        <Logo footer />
        <nav aria-label="Footer Navigation">
          <ul
            className={`${styles.navList} uppercase fs-100 letter-spacing-1 fw-700`}
          >
            <li>
              <Link href={Path.HOME} className={styles.navLink}>
                Home
              </Link>
            </li>
            <li>
              <Link href={Path.ABOUT} className={styles.navLink}>
                About Us
              </Link>
            </li>
            <li>
              <Link href={Path.CREATE_PLAN} className={styles.navLink}>
                Create Your Plan
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <ul className={styles.socialList}>
        <li>
          <ImageLink
            href="https://facebook.com"
            src={FacebookLogo}
            alt="Facebook"
            aria-label="Visit our Facebook page"
          />
        </li>
        <li>
          <ImageLink
            href="https://twitter.com"
            src={TwitterLogo}
            alt="Twitter"
            aria-label="Visit our Twitter page"
          />
        </li>
        <li>
          <ImageLink
            href="https://instagram.com"
            src={InstagramLogo}
            alt="Instagram"
            aria-label="Visit our Instagram page"
          />
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
