import styles from "./MisionVision.module.css";
import { MisionCard } from "./parts/MisionCard";

/**
 * Misión y Visión section for Sobre Nosotros page.
 * Modularized: delegates each card to MisionCard part.
 *
 * @param {Object} props
 * @param {{ mision: { title: string, text: string }, vision: { title: string, text: string } }} props.dict
 * @returns {JSX.Element}
 */
export function MisionVision({ dict }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <MisionCard id="card-mision" title={dict.mision.title} text={dict.mision.text} />
        <MisionCard id="card-vision" title={dict.vision.title} text={dict.vision.text} />
      </div>
    </section>
  );
}
