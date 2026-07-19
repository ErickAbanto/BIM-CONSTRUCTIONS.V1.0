import styles from "./ProyectoDetalleLocation.module.css";
import { LocationHeader } from "./parts/LocationHeader";
import { LocationMap } from "./parts/LocationMap";

/**
 * Component to display the project's location using a Google Maps iframe.
 *
 * @param {Object} props
 * @param {Object} props.dict - Loaded dictionary for translations
 */
export function ProyectoDetalleLocation({ dict }) {
  const t = dict.proyectos?.projectDetails?.location || {};

  const mapSrc = CIENTEGA_MAP_URL;

  return (
    <section className={styles.locationSection}>
      <LocationHeader title={t.title || "Ubicación del Proyecto"} />
      <LocationMap src={mapSrc} title={t.mapTitle || "Mapa de ubicación del proyecto"} />
    </section>
  );
}
