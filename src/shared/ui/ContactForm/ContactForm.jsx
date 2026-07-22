"use client";

import { useActionState, useEffect } from "react";
import styles from "./ContactForm.module.css";
import { Title } from "@/shared/ui/Title/Title";
import { Text } from "@/shared/ui/Text/Text";
import { Input } from "@/shared/ui/Input/Input";
import { PhoneInput } from "@/shared/ui/PhoneInput/PhoneInput";
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

  if (!dict) return null;

  /** Derive ordered service options from the dictionary */
  const SERVICE_OPTION_KEYS = ["construccion", "diseno", "consultoria", "supervision"];

  return (
    <form
      className={styles.form}
      action={formAction}
      aria-label={dict.title}
      noValidate
    >
      {/* ── Header ── */}
      <Title level="h2" className={styles.title}>
        {titleOverride !== undefined ? titleOverride : dict.title}
      </Title>
      
      {subtitleOverride !== null && (
        <Text as="p" variant="muted" size="sm" className={styles.subtitle}>
          {subtitleOverride !== undefined ? subtitleOverride : dict.subtitle}
        </Text>
      )}

      {/* Honeypot field for bot protection */}
      <input type="text" name="bot_field" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      {/* ── Feedback Message ── */}
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

      {/* ── Fields grid ── */}
      <div className={styles.formGrid}>
        <div className={styles.inputGroup}>
          <Input
            type="text"
            name="name"
            placeholder={dict.fields.name}
            required
            aria-invalid={!!state?.errors?.name}
          />
          {state?.errors?.name && <span className={styles.errorText} style={{ color: 'red', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>{state.errors.name[0]}</span>}
        </div>

        <div className={styles.inputGroup}>
          <Input
            type="email"
            name="email"
            placeholder={dict.fields.email}
            required
            aria-invalid={!!state?.errors?.email}
          />
          {state?.errors?.email && <span className={styles.errorText} style={{ color: 'red', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>{state.errors.email[0]}</span>}
        </div>

        <div className={styles.inputGroup}>
          <PhoneInput
            name="phone"
            placeholder={dict.fields.phone}
            ariaInvalid={!!state?.errors?.phone}
          />
          {state?.errors?.phone && <span className={styles.errorText} style={{ color: 'red', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>{state.errors.phone[0]}</span>}
        </div>

        <div className={styles.inputGroup}>
          <Input
            type="text"
            name="address"
            placeholder={dict.fields.address}
            aria-invalid={!!state?.errors?.address}
          />
          {state?.errors?.address && <span className={styles.errorText} style={{ color: 'red', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>{state.errors.address[0]}</span>}
        </div>

        {/* Service selector — options sourced from i18n dict */}
        <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
          <Input
            as="select"
            name="services"
            required
            defaultValue=""
            aria-invalid={!!state?.errors?.services}
          >
            <option value="" disabled hidden>
              {dict.serviceOptions?.placeholder || dict.fields.services}
            </option>
            {SERVICE_OPTION_KEYS.map((key) => (
              <option key={key} value={key}>
                {dict.serviceOptions?.[key] ?? key}
              </option>
            ))}
          </Input>
          {state?.errors?.services && <span className={styles.errorText} style={{ color: 'red', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>{state.errors.services[0]}</span>}
        </div>

        <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
          <Input
            as="textarea"
            name="message"
            placeholder={dict.fields.message}
            required
            rows={5}
            aria-invalid={!!state?.errors?.message}
          />
          {state?.errors?.message && <span className={styles.errorText} style={{ color: 'red', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>{state.errors.message[0]}</span>}
        </div>
      </div>

      {/* ── Submit ── */}
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
