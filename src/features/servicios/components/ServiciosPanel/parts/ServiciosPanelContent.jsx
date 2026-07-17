import Link from "next/link";
import { Title } from "@/shared/ui/Title/Title";
import { Text } from "@/shared/ui/Text/Text";
import styles from "../ServiciosPanel.module.css";

export function ServiciosPanelContent({ lang, dict }) {
  return (
    <div className={styles.content}>
      <Title level="h2" className={styles.title}>{dict.title}</Title>
      <Text as="p" className={styles.description}>{dict.description}</Text>
      <Link href={`/${lang}/contacto`} className={styles.btn}>
        {dict.btnContact || "Solicitar Información"}
      </Link>
    </div>
  );
}
