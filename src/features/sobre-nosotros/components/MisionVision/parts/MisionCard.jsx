import { Title } from "@/shared/ui/Title/Title";
import { Text } from "@/shared/ui/Text/Text";
import styles from "./MisionCard.module.css";

/**
 * Single Misión or Visión card.
 *
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.text
 * @param {string} props.id
 * @returns {JSX.Element}
 */
export function MisionCard({ title, text, id }) {
  return (
    <div className={styles.card} id={id}>
      <Title level="h2" className={styles.cardTitle}>
        {title}
      </Title>
      <div className={styles.separator} />
      <Text as="p" className={styles.cardText}>
        {text}
      </Text>
    </div>
  );
}
