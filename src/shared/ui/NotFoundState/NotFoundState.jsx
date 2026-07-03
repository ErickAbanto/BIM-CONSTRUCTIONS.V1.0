import { Title } from "../Title/Title";
import { Text } from "../Text/Text";
import { Button } from "../Button/Button";
import styles from "./NotFoundState.module.css";

/**
 * Reusable Not Found (404) UI component.
 *
 * @param {Object} props
 * @param {Object} props.dict - Dictionary translations for the 404 page.
 * @param {string} [props.lang="es"] - Current language locale.
 * @returns {JSX.Element}
 */
export function NotFoundState({ dict, lang = "es" }) {
  // En caso de que se monte sin diccionario (ej. error 404 de next estático) usamos fallback
  const d = dict || {
    title: "Página no encontrada",
    message: "Lo sentimos, la página que estás buscando no existe o ha sido movida a otra dirección.",
    btnBack: "Volver al Inicio"
  };

  return (
    <div className={styles.container}>
      <div className={styles.errorCode}>404</div>
      <Title level="h1" className={styles.title}>
        {d.title}
      </Title>
      <Text as="p" size="lg" className={styles.message}>
        {d.message}
      </Text>
      <Button variant="primary" href={`/${lang}`} size="lg" nativeLink={true}>
        {d.btnBack}
      </Button>
    </div>
  );
}
