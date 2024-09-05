"use client";
import { useState, useCallback, useEffect, useRef } from "react";
import styles from "./NavBar.module.scss";
import Image from "next/image";
import iconHamburger from "@/public/assets/shared/mobile/icon-hamburger.svg";
import iconClose from "@/public/assets/shared/mobile/icon-close.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BreakPoints, Path } from "@/app/utils/types";
import useScreenSizeHandler from "@/hooks/useScreenSizeHandler";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const navWrapperRef = useRef<HTMLDivElement>(null);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      navWrapperRef.current &&
      !navWrapperRef.current.contains(event.target as HTMLDivElement)
    ) {
      setIsMenuOpen(false);
    }
  }, []);

  useScreenSizeHandler(setIsMenuOpen, false, BreakPoints.MD);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const renderNavItem = (path: Path, label: string) => (
    <li
      className={`${pathname === path ? "active" : ""} flex`}
      key={path + Math.random()}
    >
      <Link
        className="uppercase text-neutral letter-spacing-1"
        href={path}
        aria-current={pathname === path ? "page" : undefined}
        onClick={() => setIsMenuOpen(false)}
      >
        {label}
      </Link>
    </li>
  );

  return (
    <div
      ref={navWrapperRef}
      data-testid="nav-wrapper"
      className={`${styles["primary-navigation"]} flex ${
        isMenuOpen ? styles.open : styles.closed
      }`}
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
        className={`${styles.navbar} flex align-items-center ${isMenuOpen ? styles.open : ""}`}
      >
        <ul
          id="primary-navigation"
          className={`flex justify-space-around fs-200 fw-700 ${
            isMenuOpen ? styles.open : ""
          }`}
        >
          {renderNavItem(Path.HOME, "Home")}
          {renderNavItem(Path.NOT_READY, "About us")}
          {renderNavItem(Path.NOT_READY, "Create your plan")}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
