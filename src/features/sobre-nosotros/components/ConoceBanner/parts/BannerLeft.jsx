import { Title } from "@/shared/ui/Title/Title";
import styles from "./BannerLeft.module.css";

/**
 * Left side of ConoceBanner: title + accent separator.
 *
 * @param {Object} props
 * @param {string} props.title
 * @returns {JSX.Element}
 */
export function BannerLeft({ title }) {
  return (
    <div className={styles.left}>
      <Title level="h2" align="center" className={styles.title}>
        {title}
      </Title>
      <div className={styles.separator} />
    </div>
  );
}
