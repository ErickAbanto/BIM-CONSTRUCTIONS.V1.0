import styles from "../ServiciosIntro.module.css";
import { Title } from "@/shared/ui/Title/Title";
import { Text } from "@/shared/ui/Text/Text";

export function ServiciosIntroText({ dict }) {
  return (
    <div className={styles.textGroup}>
      <Title level="h2" className={styles.heading}>{dict.title}</Title>
      <Text as="p" className={styles.quote}>{dict.text}</Text>
      <Text as="p" className={styles.quote2}>{dict.text2}</Text>
    </div>
  );
}
