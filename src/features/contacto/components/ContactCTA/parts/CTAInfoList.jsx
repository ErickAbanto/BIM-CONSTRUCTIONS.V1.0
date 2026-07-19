import styles from "./CTAInfoList.module.css";
import { Text } from "@/shared/ui/Text/Text";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

/**
 * CTAInfoList — renders the list of contact details.
 *
 * @returns {JSX.Element}
 */
export function CTAInfoList() {
  return (
    <ul className={styles.infoList} aria-label="Información de contacto">
      <li className={styles.infoItem}>
        <MapPin className={styles.icon} aria-hidden="true" />
        <Text as="span" size="sm">
          Av. Circunvalación del Club Golf Los Incas 134 Torre 1 Of. 802.
        </Text>
      </li>
      <li className={styles.infoItem}>
        <Mail className={styles.icon} aria-hidden="true" />
        <Text as="span" size="sm">
          contacto@jivconsultores.com
        </Text>
      </li>
      <li className={styles.infoItem}>
        <Phone className={styles.icon} aria-hidden="true" />
        <Text as="span" size="sm">
          (511) 651-0900 / 999 333 637
        </Text>
      </li>
      <li className={styles.infoItem}>
        <Clock className={styles.icon} aria-hidden="true" />
        <Text as="span" size="sm">
          Lunes–Viernes: 8:00am – 5:30pm
        </Text>
      </li>
    </ul>
  );
}
