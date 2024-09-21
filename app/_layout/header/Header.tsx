import { Suspense } from "react";
import NavBar from "@/components/navbar/NavBar";
import styles from "./Header.module.scss";
import Logo from "@/components/logo/Logo";

const Header = () => (
  <header className={`${styles.mainHeader} sticky`}>
    <div className={`${styles.menu} flex justify-space-between container`}>
      <Logo />
      <Suspense fallback={<div>Loading navigation...</div>}>
        <NavBar />
      </Suspense>
    </div>
  </header>
);

export default Header;
