import Image from "next/image";
import styles from "./Commitment.module.scss";
import commitmentImageDesktop from "@/public/assets/about/desktop/image-commitment.jpg";
import commitmentImageTablet from "@/public/assets/about/tablet/image-commitment.jpg";
import commitmentImageMobile from "@/public/assets/about/mobile/image-commitment.jpg";

const Commitment = () => {
  return (
    <section id="commitment" className={styles.commitment}>
      <picture>
        <source
          media="(min-width: 992px)"
          srcSet={commitmentImageDesktop.src}
        />
        <source media="(min-width: 768px)" srcSet={commitmentImageTablet.src} />
        <Image
          src={commitmentImageMobile}
          className={styles.image}
          alt="A barista carefully doing coffee art"
        />
      </picture>
      <div className={styles.content}>
        <h2 className={`${styles.title} ff-serif`}>Our commitment</h2>
        <p className={styles.description}>
          We’re built on a simple mission and a commitment to doing good along
          the way. We want to make it easy for you to discover and brew the
          world’s best coffee at home. It all starts at the source. To locate
          the specific lots we want to purchase, we travel nearly 60 days a year
          trying to understand the challenges and opportunities in each of these
          places. We collaborate with exceptional coffee growers and empower a
          global community of farmers through with well above fair-trade
          benchmarks. We also offer training, support farm community
          initiatives, and invest in coffee plant science. Curating only the
          finest blends, we roast each lot to highlight tasting profiles
          distinctive to their native growing region.
        </p>
      </div>
    </section>
  );
};

export default Commitment;
