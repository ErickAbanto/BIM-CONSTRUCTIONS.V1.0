import Image from "next/image";
import { Title } from "@/shared/ui/Title/Title";
import { Text } from "@/shared/ui/Text/Text";
import styles from "./HistoriaCards.module.css";

const CARD_IMAGES = [
  "/images/construction-plans.png",
  "/images/bim-model.png",
  "/images/sobre-nosotros-hero.png",
];

/**
 * Right column of ConoceHistoria: 3 dark feature cards.
 *
 * @param {Object} props
 * @param {{ card1Title: string, card1Desc: string, card2Title: string, card2Desc: string, card3Title: string, card3Desc: string }} props.dict
 * @returns {JSX.Element}
 */
export function HistoriaCards({ dict }) {
  const cards = [
    { id: "ingenieria", title: dict.card1Title, desc: dict.card1Desc, img: CARD_IMAGES[0] },
    { id: "diseno",     title: dict.card2Title, desc: dict.card2Desc, img: CARD_IMAGES[1] },
    { id: "bim",        title: dict.card3Title, desc: dict.card3Desc, img: CARD_IMAGES[2] },
  ];

  return (
    <div className={styles.cards}>
      {cards.map((card) => (
        <div key={card.id} className={styles.card} id={`feature-${card.id}`}>
          <div className={styles.cardThumb}>
            <Image
              src={card.img}
              alt={card.title}
              fill
              className={styles.thumbImage}
              sizes="120px"
            />
          </div>
          <div className={styles.cardBody}>
            <Title level="h3" className={styles.cardTitle}>
              {card.title}
            </Title>
            <Text size="sm" className={styles.cardDesc}>
              {card.desc}
            </Text>
          </div>
        </div>
      ))}
    </div>
  );
}
