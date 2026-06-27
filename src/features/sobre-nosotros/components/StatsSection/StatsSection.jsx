import styles from "./StatsSection.module.css";
import { StatsMetrics } from "./parts/StatsMetrics";

/**
 * Stats section for Sobre Nosotros page.
 * Shows 3 key metrics with diagonal ray background decoration.
 * Modularized: delegates metrics to StatsMetrics part.
 *
 * @param {Object} props
 * @param {string} props.lang
 * @param {Object} props.dict
 * @returns {JSX.Element}
 */
export function StatsSection({ lang, dict }) {
  return (
    <section className={styles.section}>
      {/* ---- Fondo con rayos diagonales ---- */}
      <div className={styles.bgRays} aria-hidden="true">
        <div className={styles.ray} />
        <div className={styles.ray} />
        <div className={styles.ray} />
        <div className={styles.ray} />
      </div>

      <div className={styles.container}>
        <StatsMetrics dict={dict} />
      </div>
    </section>
  );
}
