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

  const navItems = [
    { path: Path.HOME, label: "Home" },
    { path: Path.ABOUT, label: "About us" },
    { path: Path.CREATE_PLAN, label: "Create your plan" },
  ];

  const renderNavItem = useCallback(
    (path: Path, label: string) => (
      <li className={`${pathname === path ? "active" : ""} flex`} key={path}>
        <Link
          href={path}
          aria-current={pathname === path ? "page" : undefined}
          aria-label={`Go to ${label} page`}
        >
          {label}
        </Link>
      </li>
    ),
    [pathname],
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
        {...(isMenuOpen && {
          "aria-expanded": true,
          "aria-controls": "primary-navigation",
        })}
      >
        <Image
          src={isMenuOpen ? iconClose : iconHamburger}
          alt="Open menu hamburger icon"
          aria-hidden="true"
          priority
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
          {navItems.map(({ path, label }) => renderNavItem(path, label))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
