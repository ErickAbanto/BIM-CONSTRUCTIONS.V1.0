import { Title } from "@/shared/ui/Title/Title";
import { Text } from "@/shared/ui/Text/Text";
import styles from "./StatsMetrics.module.css";

/**
 * Three key metrics for StatsSection.
 *
 * @param {Object} props
 * @param {{ stat1Number: string, stat1Label: string, stat2Number: string, stat2Label: string, stat3Number: string, stat3Label: string }} props.dict
 * @returns {JSX.Element}
 */
export function StatsMetrics({ dict }) {
  const metrics = [
    { id: "proyectos",   number: dict.stat1Number, label: dict.stat1Label },
    { id: "cumplimiento", number: dict.stat2Number, label: dict.stat2Label },
    { id: "clientes",    number: dict.stat3Number, label: dict.stat3Label },
  ];

  return (
    <div className={styles.metrics}>
      {metrics.map((m) => (
        <div key={m.id} className={styles.metric} id={`stat-${m.id}`}>
          <Title level="h3" className={styles.metricNumber}>
            {m.number}
          </Title>
          <Text as="span" size="sm" className={styles.metricLabel}>
            {m.label}
          </Text>
        </div>
      ))}
    </div>
  );
}
