import styles from "./ServiciosIntro.module.css";
import { ServiciosIntroPhotos } from "./parts/ServiciosIntroPhotos";
import { ServiciosIntroText } from "./parts/ServiciosIntroText";
import { Text } from "@/shared/ui/Text/Text";

export function ServiciosIntro({ dict }) {
  return (
    <section className={styles.section}>
      <div className={styles.diagonal} aria-hidden="true" />
      <div className={styles.inner}>
        <Text as="p" className={styles.sectionLabel}>INTRODUCCIÓN</Text>
        <div className={styles.grid}>
          <ServiciosIntroPhotos />
          <ServiciosIntroText dict={dict} />
        </div>
      </div>
    </section>
  );
}
