import { Text } from "@/shared/ui/Text/Text";
import styles from "./BannerRight.module.css";

/**
 * Right side of ConoceBanner: italic blockquote.
 *
 * @param {Object} props
 * @param {string} props.quote
 * @returns {JSX.Element}
 */
export function BannerRight({ quote }) {
  return (
    <div className={styles.right}>
      <blockquote className={styles.quote}>
        <Text as="span" className={styles.quoteText}>
          {quote}
        </Text>
      </blockquote>
    </div>
  );
}
