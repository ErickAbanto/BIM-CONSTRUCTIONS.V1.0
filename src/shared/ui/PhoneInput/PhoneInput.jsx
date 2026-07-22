"use client";

import { useState } from "react";
import PhoneInputLib from "react-phone-number-input";
import "react-phone-number-input/style.css";
import styles from "./PhoneInput.module.css";
import { cn } from "@/shared/lib/cn";

/**
 * Phone Input component with country code dropdown.
 * Wraps react-phone-number-input to match our design system.
 *
 * @param {Object} props
 * @param {string} props.name - Name attribute for the form submission
 * @param {string} [props.placeholder] - Placeholder text
 * @param {boolean} [props.required] - Is the field required?
 * @param {string} [props.className] - Additional wrapper classes
 * @param {boolean} [props.ariaInvalid] - For error styling
 * @returns {JSX.Element}
 */
export function PhoneInput({
  name,
  placeholder,
  required,
  className,
  ariaInvalid,
}) {
  const [value, setValue] = useState("");

  return (
    <div className={cn(styles.wrapper, className)}>
      {/* Hidden input to ensure the value is submitted with the form action */}
      <input type="hidden" name={name} value={value || ""} />
      
      <PhoneInputLib
        international
        defaultCountry="PE"
        value={value}
        onChange={setValue}
        placeholder={placeholder}
        required={required}
        aria-invalid={ariaInvalid}
      />
    </div>
  );
}
