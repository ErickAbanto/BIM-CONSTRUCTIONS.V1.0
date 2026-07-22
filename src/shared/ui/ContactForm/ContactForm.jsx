"use client";

import { useActionState, useEffect, useRef } from "react";
import styles from "./ContactForm.module.css";
import { Title } from "@/shared/ui/Title/Title";
import { Text } from "@/shared/ui/Text/Text";
import { ContactFormFields } from "./ContactFormFields";
import { SubmitButton } from "@/shared/ui/SubmitButton/SubmitButton";
import { submitContactForm } from "@/features/contacto/actions/submitContactForm";

/**
 * Reusable Contact Form.
 * Fully i18n-driven — all labels, placeholders and service options
 * come from the `contacto.details.form` dictionary slice.
 *
 * Integrates with Server Actions for secure submission.
 *
 * @param {Object} props
 * @param {Object} props.dict - `contacto.details.form` dictionary slice
 * @param {string} [props.titleOverride] - Optional override for the main heading
 * @param {string|null} [props.subtitleOverride] - Optional override for the subtitle (pass null to hide)
 * @returns {JSX.Element|null}
 */
export function ContactForm({ dict, titleOverride, subtitleOverride }) {
  const [state, formAction] = useActionState(submitContactForm, null);
  const formRef = useRef(null);

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state?.success]);

  if (!dict) return null;

  const SERVICE_OPTION_KEYS = ["construccion", "diseno", "consultoria", "supervision"];

  return (
    <form
      ref={formRef}
      className={styles.form}
      action={formAction}
      aria-label={dict.title}
      noValidate
    >
      <Title level="h2" className={styles.title}>
        {titleOverride !== undefined ? titleOverride : dict.title}
      </Title>
      
      {subtitleOverride !== null && (
        <Text as="p" variant="muted" size="sm" className={styles.subtitle}>
          {subtitleOverride !== undefined ? subtitleOverride : dict.subtitle}
        </Text>
      )}

      <input type="text" name="bot_field" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" aria-hidden="true" />

      {state?.message && (
        <div 
          className={styles.formMessage} 
          style={{ 
            color: state.success ? "var(--color-success, green)" : "var(--color-error, red)", 
            marginBottom: "var(--space-md)",
            padding: "var(--space-sm)",
            backgroundColor: state.success ? "rgba(0,128,0,0.1)" : "rgba(255,0,0,0.1)",
            borderRadius: "4px"
          }}
          role="alert"
        >
          {state.message}
        </div>
      )}

      <ContactFormFields dict={dict} state={state} />

      <div className={styles.submitWrapper}>
        <SubmitButton 
          label={dict.submit} 
          pendingLabel={dict.submitting} 
          className={styles.submitBtn} 
        />
      </div>
    </form>
  );
}
