import styles from "../ServiciosEnfoque.module.css";
import Link from "next/link";
import { Title } from "@/shared/ui/Title/Title";
import { Text } from "@/shared/ui/Text/Text";

export function ServiciosEnfoqueText({ dict }) {
  return (
    <div className={styles.textGroup}>
      <div className={styles.headingWrapper}>
        <div className={styles.dashLine} aria-hidden="true"></div>
        <Title level="h2" className={styles.heading}>{dict.title}</Title>
      </div>
      <Text as="p" className={styles.description}>{dict.text}</Text>
      
      <div className={styles.checklist}>
        {dict.list?.map((item, index) => (
          <div key={index} className={styles.checklistItem}>
            <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <Text as="span" className={styles.checkText}>{item}</Text>
          </div>
        ))}
      </div>
      
      <Link href="/es/contacto" className={styles.btn}>
        {dict.btn || "Saber más"}
      </Link>
    </div>
  );
}
