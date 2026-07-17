import Link from "next/link";
import { Title } from "@/shared/ui/Title/Title";
import { Text } from "@/shared/ui/Text/Text";
import styles from "../ServiciosHero.module.css";

export function ServiciosHeroContent({ lang, dict }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Title level="h1" className={styles.title}>{dict.title}</Title>
        <Text as="p" className={styles.description}>{dict.description}</Text>
        <Link
          href={`/${lang}/contacto`}
          className={styles.btn}
          id="btn-servicios-hero"
        >
          {dict.btnContact}
        </Link>
      </div>
    </div>
  );
}
