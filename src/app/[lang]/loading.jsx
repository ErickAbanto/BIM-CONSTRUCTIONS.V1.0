import styles from './loading.module.css';

/**
 * Global loading skeleton displayed during route transitions.
 * Server Component by default.
 *
 * @returns {JSX.Element}
 */
export default function Loading() {
  return (
    <div className={styles.container} aria-busy="true" aria-label="Cargando contenido">
      <div className={styles.spinner}>
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
      </div>
    </div>
  );
}
