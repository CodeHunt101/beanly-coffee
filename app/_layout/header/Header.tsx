import { Suspense } from "react";
import NavBar from "@/components/navbar/NavBar";
import styles from "./Header.module.scss";
import Logo from "@/components/logo/Logo";

const Header = () => {
  return (
    <header id={styles.mainHeader} className="container sticky">
      <section className={`${styles.menu} flex justify-space-between`}>
        <Logo />
        <Suspense fallback={<div>Loading navigation...</div>}>
          <NavBar />
        </Suspense>
      </section>
    </header>
  );
};

export default Header;
