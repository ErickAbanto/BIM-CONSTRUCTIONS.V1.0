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
 * Grid layout for ServicioCard components.
 * 
 * @param {Object} props
 * @param {Array<{id: string, title: string}>} props.cards - List of services.
 * @param {string} props.lang - Current language locale.
 * @param {string} [props.cardCta]
 * @param {string} [props.cardAriaSuffix]
 * @returns {JSX.Element}
 */
export function ServiciosGrid({ cards, lang, cardCta, cardAriaSuffix }) {
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
            ctaText={cardCta}
            ariaSuffix={cardAriaSuffix}
          />
        );
      })}
    </div>
  );
}
