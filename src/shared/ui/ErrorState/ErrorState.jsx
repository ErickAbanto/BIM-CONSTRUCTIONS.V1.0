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
 * @returns {JSX.Element}
 */
export function ErrorState({ error, reset }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Title level="h1" className={styles.title}>
          ¡Algo salió mal!
        </Title>
        <Text as="p" size="base" className={styles.message}>
          Ocurrió un error inesperado en el servidor al intentar cargar esta sección. 
          Nuestro equipo ya ha sido notificado.
        </Text>
        <div className={styles.actions}>
          <Button variant="primary" onClick={() => reset()}>
            Intentar de nuevo
          </Button>
          <Button variant="outline" href="/es" nativeLink={true}>
            Volver al Inicio
          </Button>
        </div>
      </div>
    </div>
  );
}
