"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/shared/ui/Button/Button";

/**
 * Submit button that automatically shows pending state.
 * MUST be rendered as a child of a <form> element.
 *
 * @param {Object} props
 * @param {string} props.label - Button label text.
 * @param {string} props.pendingLabel - Label while pending.
 * @param {string} [props.className] - Additional CSS classes.
 * @returns {JSX.Element}
 */
export function SubmitButton({ label, pendingLabel, className }) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant="primary"
      className={className}
      disabled={pending}
      aria-busy={pending}
    >
      {pending ? pendingLabel : label}
    </Button>
  );
}
