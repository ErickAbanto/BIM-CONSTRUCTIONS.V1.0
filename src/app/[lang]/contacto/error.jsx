"use client";

import { Button } from "@/shared/ui/Button/Button";
import { Text } from "@/shared/ui/Text/Text";

/**
 * Contact section error boundary.
 *
 * @param {Object} props
 * @param {Error} props.error
 * @param {() => void} props.reset
 * @returns {JSX.Element}
 */
export default function ContactoError({ error, reset }) {
  return (
    <div role="alert" style={{ padding: "var(--space-4xl) var(--space-xl)", textAlign: "center" }}>
      <Text as="h2" style={{ marginBottom: "var(--space-md)" }}>
        No se pudo cargar la información de contacto / Could not load contact information
      </Text>
      <Text as="p" variant="muted" style={{ marginBottom: "var(--space-2xl)" }}>
        {"Ha ocurrido un problema de conexión. Intenta cargar la página nuevamente. / A connection problem occurred. Try loading the page again."}
      </Text>
      <Button variant="primary" onClick={reset}>Reintentar / Retry</Button>
    </div>
  );
}
