import styles from "./AboutUsSection.module.css";
import { AboutImages } from "./parts/AboutImages";
import { AboutText } from "./parts/AboutText";
import { cn } from "@/shared/lib/cn";

/**
 * Sección "Quiénes Somos" para la página de inicio.
 * Server Component por defecto (RSC).
 *
 * @param {Object} props
 * @param {Object} props.dict - Diccionario de textos (home.aboutUs).
 * @param {string} [props.className] - Clases CSS adicionales.
 * @returns {JSX.Element}
 */
export function AboutUsSection({ dict, className }) {
  return (
    <section className={cn(styles.section, className)} aria-labelledby="about-us-title">
      <div className={styles.container}>
        <div className={styles.textColumn}>
          <AboutText dict={dict} />
        </div>
        <div className={styles.imageColumn}>
          <AboutImages />
        </div>
      </div>
    </section>
  );
}
