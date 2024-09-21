"use client";
import { useState, useCallback } from "react";
import styles from "./NavBar.module.scss";
import Image from "next/image";
import iconHamburger from "@/public/assets/shared/mobile/icon-hamburger.svg";
import iconClose from "@/public/assets/shared/mobile/icon-close.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useScreenSizeHandler from "@/hooks/useScreenSizeHandler";
import { BreakPoints, Path } from "@/app/_utils/types";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  useScreenSizeHandler(setIsMenuOpen, false, BreakPoints.MD);

  const renderNavItem = (path: Path, label: string) => (
    <li className={`${pathname === path ? "active" : ""} flex`} key={path}>
      <Link href={path} aria-current={pathname === path ? "page" : undefined}>
        {label}
      </Link>
    </li>
  );

  const handleNavClick = useCallback((event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.tagName === "A") {
      setIsMenuOpen(false);
    }
  }, []);

  return (
    <div
      data-testid="nav-wrapper"
      className={`${styles.primaryNavigation} ${isMenuOpen ? styles.menuOpen : styles.closed}`}
    >
      <button
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-controls="primary-navigation"
        aria-expanded={isMenuOpen}
      >
        <Image
          src={isMenuOpen ? iconClose : iconHamburger}
          alt={isMenuOpen ? "Close menu icon" : "Open menu icon"}
        />
      </button>
      <nav
        aria-label="Primary Navigation"
        className={`${styles.navbar} ${isMenuOpen ? styles.menuOpen : ""}`}
        onClick={handleNavClick}
      >
        <ul
          id="primary-navigation"
          className={`fw-700 ${isMenuOpen ? styles.menuOpen : ""} letter-spacing-1`}
        >
          {renderNavItem(Path.HOME, "Home")}
          {renderNavItem(Path.ABOUT, "About us")}
          {renderNavItem(Path.CREATE_PLAN, "Create your plan")}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
