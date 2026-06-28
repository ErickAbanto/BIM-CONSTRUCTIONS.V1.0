import { Button } from "@/shared/ui/Button/Button";
import { Title } from "@/shared/ui/Title/Title";
import { Text } from "@/shared/ui/Text/Text";
import styles from "./SobreHeroContent.module.css";

/**
 * Foreground text content for SobreHero.
 *
 * @param {Object} props
 * @param {{ title: string, description: string, btnProjects: string }} props.dict
 * @param {string} props.lang
 * @returns {JSX.Element}
 */
export function SobreHeroContent({ dict, lang }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Title as="h1" level="h1" className={styles.title}>
          {dict.title}
        </Title>
        <Text size="base" className={styles.description}>
          {dict.description}
        </Text>
        <div className={styles.actions}>
          <Button href={`/${lang}/proyectos`} variant="primary" size="lg">
            {dict.btnProjects}
          </Button>
        </div>
      </div>
    </div>
  );
}
