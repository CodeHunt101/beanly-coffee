import styles from "./Quality.module.scss";
import Image from "next/image";
import qualityImageDesktop from "@/public/assets/about/desktop/image-quality.jpg";
import qualityImageTablet from "@/public/assets/about/tablet/image-quality.jpg";
import qualityImageMobile from "@/public/assets/about/mobile/image-quality.jpg";

const Quality = () => {
  return (
    <section className={`${styles.quality}`}>
      <picture>
        <source media="(min-width: 1280px)" srcSet={qualityImageDesktop.src} />
        <source media="(min-width: 768px)" srcSet={qualityImageTablet.src} />
        <Image
          src={qualityImageMobile}
          className={styles.image}
          alt="A coffee cup with latte art being grabbed by a hand"
        />
      </picture>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2 className={`${styles.title} ff-serif`}>Uncompromising quality</h2>
          <p className={styles.description}>
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Quality;
