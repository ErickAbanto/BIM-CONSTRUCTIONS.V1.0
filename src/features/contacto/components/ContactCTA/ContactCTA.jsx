import styles from "./ContactCTA.module.css";
import { Title } from "@/shared/ui/Title/Title";
import { Text } from "@/shared/ui/Text/Text";
import { ContactForm } from "@/shared/ui/ContactForm/ContactForm";
import { CTAInfoList } from "./parts/CTAInfoList";
import { CTASocials } from "./parts/CTASocials";

/**
 * ContactCTA
 * A call-to-action section meant for the bottom of Projects or Services.
 * Shows a title, description, contact info list, social networks, and a form.
 *
 * @param {Object} props
 * @param {Object} props.dict - Dictionary slice (e.g. `proyectos.cta`)
 * @param {Object} props.formDict - Dictionary slice for the form (`contacto.details.form`)
 * @returns {JSX.Element|null}
 */
export function ContactCTA({ dict, formDict }) {
  if (!dict || !formDict) return null;

  return (
    <section className={styles.section} aria-label={dict.title}>
      <div className={styles.container}>
        {/* ── Left Column ── */}
        <div className={styles.leftCol}>
          <Title level="h2" className={styles.title}>
            {dict.title}
          </Title>
          <Text as="p" className={styles.description}>
            {dict.description}
          </Text>

          <CTAInfoList />
          
          <CTASocials title={dict.socialTitle} />
        </div>

        {/* ── Right Column ── */}
        <div className={styles.rightCol}>
          <ContactForm
            dict={formDict}
            titleOverride={dict.formTitle}
            subtitleOverride={null} /* Hides the subtitle based on design */
          />
        </div>
      </div>
    </section>
  );
}
