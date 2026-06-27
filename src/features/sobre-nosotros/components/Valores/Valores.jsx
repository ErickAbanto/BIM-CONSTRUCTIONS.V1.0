import styles from "./Valores.module.css";
import { ValoresHeader } from "./parts/ValoresHeader";
import { ValoresGrid } from "./parts/ValoresGrid";

/**
 * Valores section for Sobre Nosotros page.
 * Modularized: delegates header and grid to dedicated parts.
 *
 * @param {Object} props
 * @param {Object} props.dict
 * @returns {JSX.Element}
 */
export function Valores({ dict }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <ValoresHeader sectionTitle={dict.sectionTitle} sectionDesc={dict.sectionDesc} />
        <ValoresGrid dict={dict} />
      </div>
    </section>
  );
}
