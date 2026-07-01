import { Title } from "../Title/Title";
import { Text } from "../Text/Text";
import { Button } from "../Button/Button";
import styles from "./NotFoundState.module.css";

/**
 * Reusable Not Found (404) UI component.
 *
 * @returns {JSX.Element}
 */
export function NotFoundState() {
  return (
    <div className={styles.container}>
      <div className={styles.errorCode}>404</div>
      <Title level="h1" className={styles.title}>
        Página no encontrada
      </Title>
      <Text as="p" size="lg" className={styles.message}>
        Lo sentimos, la página que estás buscando no existe o ha sido movida a otra dirección.
      </Text>
      <Button variant="primary" href="/es" size="lg" nativeLink={true}>
        Volver al Inicio
      </Button>
    </div>
  );
}
