import Image from "next/image";
import styles from "./SobreHeroBg.module.css";

/**
 * Background image + overlay layer for SobreHero.
 *
 * @returns {JSX.Element}
 */
export function SobreHeroBg() {
  return (
    <div className={styles.bgWrapper} aria-hidden="true">
      <Image
        src="/images/sobre-nosotros-hero.png"
        alt=""
        fill
        className={styles.bgImage}
        priority
        sizes="100vw"
      />
      <div className={styles.overlay} />
    </div>
  );
}
