import styles from "./ConoceBanner.module.css";
import { BannerLeft } from "./parts/BannerLeft";
import { BannerRight } from "./parts/BannerRight";

/**
 * "Conoce Cómo Iniciamos" banner section.
 * Modularized: delegates left title and right quote to dedicated parts.
 *
 * @param {Object} props
 * @param {{ title: string, quote: string }} props.dict
 * @returns {JSX.Element}
 */
export function ConoceBanner({ dict }) {
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <BannerLeft title={dict.title} />
        <div className={styles.divider} />
        <BannerRight quote={dict.quote} />
      </div>
    </section>
  );
}
