import styles from "./ContactForm.module.css";
import { Input } from "@/shared/ui/Input/Input";
import { PhoneInput } from "@/shared/ui/PhoneInput/PhoneInput";

/**
 * Renders the grid of input fields for the Contact Form.
 * 
 * @param {Object} props
 * @param {Object} props.dict - Dictionary slice for the form fields
 * @param {Object} props.state - Form action state containing errors
 * @returns {JSX.Element}
 */
export function ContactFormFields({ dict, state }) {
  const SERVICE_OPTION_KEYS = ["construccion", "diseno", "consultoria", "supervision"];

  return (
    <div className={styles.formGrid}>
      <div className={styles.inputGroup}>
        <Input
          type="text"
          name="name"
          placeholder={dict.fields.name}
          required
          aria-invalid={!!state?.errors?.name}
          aria-describedby={state?.errors?.name ? 'error-name' : undefined}
        />
        {state?.errors?.name && <span id="error-name" className={styles.errorText}>{state.errors.name[0]}</span>}
      </div>

      <div className={styles.inputGroup}>
        <Input
          type="email"
          name="email"
          placeholder={dict.fields.email}
          required
          aria-invalid={!!state?.errors?.email}
          aria-describedby={state?.errors?.email ? 'error-email' : undefined}
        />
        {state?.errors?.email && <span id="error-email" className={styles.errorText}>{state.errors.email[0]}</span>}
      </div>

      <div className={styles.inputGroup}>
        <PhoneInput
          key={state?.success ? "phone-success" : "phone-default"}
          name="phone"
          placeholder={dict.fields.phone}
          ariaInvalid={!!state?.errors?.phone}
          aria-describedby={state?.errors?.phone ? 'error-phone' : undefined}
        />
        {state?.errors?.phone && <span id="error-phone" className={styles.errorText}>{state.errors.phone[0]}</span>}
      </div>

      <div className={styles.inputGroup}>
        <Input
          type="text"
          name="address"
          placeholder={dict.fields.address}
          aria-invalid={!!state?.errors?.address}
          aria-describedby={state?.errors?.address ? 'error-address' : undefined}
        />
        {state?.errors?.address && <span id="error-address" className={styles.errorText}>{state.errors.address[0]}</span>}
      </div>

      <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
        <Input
          as="select"
          name="services"
          required
          defaultValue=""
          aria-invalid={!!state?.errors?.services}
          aria-describedby={state?.errors?.services ? 'error-services' : undefined}
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
        {state?.errors?.services && <span id="error-services" className={styles.errorText}>{state.errors.services[0]}</span>}
      </div>

      <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
        <Input
          as="textarea"
          name="message"
          placeholder={dict.fields.message}
          required
          rows={5}
          aria-invalid={!!state?.errors?.message}
          aria-describedby={state?.errors?.message ? 'error-message' : undefined}
        />
        {state?.errors?.message && <span id="error-message" className={styles.errorText}>{state.errors.message[0]}</span>}
      </div>
    </div>
  );
}
