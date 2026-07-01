import { ServicioCard } from "./ServicioCard";
import styles from "./ServiciosGrid.module.css";

/** @type {Record<string, { imageSrc: string; imageAlt: string }>} */
const CARD_ASSETS = {
  arquitectura: {
    imageSrc: "/images/servicios/arquitectura.png",
    imageAlt: "Planos de arquitectura y diseño técnico",
  },
  "construccion-civil": {
    imageSrc: "/images/servicios/construccion-civil.png",
    imageAlt: "Grúas y obra de construcción civil",
  },
  remodelaciones: {
    imageSrc: "/images/servicios/remodelaciones.png",
    imageAlt: "Interior moderno en proceso de remodelación",
  },
};

/**
 * @typedef {Object} ServicioCardData
 * @property {string} id    - Service unique identifier.
 * @property {string} title - Localized service title.
 */

/**
 * Grid of service cards for ServiciosSection.
 * Owns the CARD_ASSETS mapping — keeping it out of the orchestrator.
 * Server Component (default).
 *
 * @param {Object}             props
 * @param {ServicioCardData[]} props.cards - Array of service card data from dictionary.
 * @param {string}             props.lang  - Active locale for building hrefs.
 * @returns {JSX.Element}
 */
export function ServiciosGrid({ cards, lang }) {
  return (
    <div className={styles.grid}>
      {cards.map((card) => {
        const assets = CARD_ASSETS[card.id] ?? {
          imageSrc: "/images/servicios/construccion-civil.png",
          imageAlt: card.title,
        };

        return (
          <ServicioCard
            key={card.id}
            title={card.title}
            imageSrc={assets.imageSrc}
            imageAlt={assets.imageAlt}
            href={`/${lang}/servicios`}
          />
        );
      })}
    </div>
  );
}
