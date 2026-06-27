import styles from "./AboutText.module.css";
import { Title } from "@/shared/ui/Title/Title";
import { Text } from "@/shared/ui/Text/Text";

/**
 * Componente de texto para la sección Quiénes Somos.
 * Incluye un bloque destacado para la historia.
 * Server Component por defecto (RSC).
 *
 * @param {Object} props
 * @param {Object} props.dict - Textos del diccionario (home.aboutUs).
 * @returns {JSX.Element}
 */
export function AboutText({ dict }) {
  if (!dict) return null;

  return (
    <div className={styles.content}>
      {/* Título Principal */}
      <Title level="h2" className={styles.title}>
        {dict.title}
      </Title>
      
      {/* Descripción Principal */}
      <Text size="lg" className={styles.description}>
        {dict.description}
      </Text>

      {/* Bloque Destacado de Historia */}
      <div className={styles.historyCard}>
        <Title level="h3" className={styles.historyTitle}>
          {dict.historyTitle}
        </Title>
        <Text className={styles.historyText}>
          {dict.historyText}
        </Text>
      </div>
    </div>
  );
}
