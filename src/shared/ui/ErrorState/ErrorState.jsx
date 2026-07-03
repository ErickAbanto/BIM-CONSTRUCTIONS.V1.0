import { Title } from "../Title/Title";
import { Text } from "../Text/Text";
import { Button } from "../Button/Button";
import styles from "./ErrorState.module.css";

/**
 * Reusable Error UI component.
 *
 * @param {Object} props
 * @param {Error & { digest?: string }} props.error
 * @param {() => void} props.reset
 * @param {Object} [props.dict] - Dictionary translations for the error page.
 * @param {string} [props.lang="es"] - Current language locale.
 * @returns {JSX.Element}
 */
export function ErrorState({ error, reset, dict, lang = "es" }) {
  // Fallback si no llega el diccionario
  const d = dict || {
    title: "¡Algo salió mal!",
    message: "Ocurrió un error inesperado en el servidor al intentar cargar esta sección. Nuestro equipo ya ha sido notificado.",
    btnRetry: "Intentar de nuevo",
    btnBack: "Volver al Inicio"
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Title level="h1" className={styles.title}>
          {d.title}
        </Title>
        <Text as="p" size="base" className={styles.message}>
          {d.message}
        </Text>
        <div className={styles.actions}>
          <Button variant="primary" onClick={() => reset()}>
            {d.btnRetry}
          </Button>
          <Button variant="outline" href={`/${lang}`} nativeLink={true}>
            {d.btnBack}
          </Button>
        </div>
      </div>
    </div>
  );
}
