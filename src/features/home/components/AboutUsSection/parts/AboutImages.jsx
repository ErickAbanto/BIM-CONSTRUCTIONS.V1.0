import Image from "next/image";
import styles from "./AboutImages.module.css";

/**
 * Galería de imágenes (Renders 3D) para la sección Quiénes Somos.
 * Server Component por defecto (RSC).
 *
 * @returns {JSX.Element}
 */
export function AboutImages() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainImageContainer}>
        <Image
          src="/images/about/render-1.png"
          alt="Render 3D de edificio moderno con tecnología BIM"
          fill
          className={styles.image}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <div className={styles.secondaryImageContainer}>
        <Image
          src="/images/about/render-2.png"
          alt="Render 3D interior de oficinas modernas"
          fill
          className={styles.image}
          sizes="(max-width: 1024px) 50vw, 25vw"
        />
      </div>
    </div>
  );
}
