import { Text } from "@/shared/ui/Text/Text";
import styles from "./HistoriaText.module.css";

/**
 * Left column of ConoceHistoria: history paragraph.
 *
 * @param {Object} props
 * @param {string} props.text
 * @returns {JSX.Element}
 */
export function HistoriaText({ text }) {
  return (
    <Text as="p" className={styles.historyText}>
      {text}
    </Text>
  );
}
