"use client";

import { ErrorState } from "@/shared/ui/ErrorState/ErrorState";
import { useEffect } from "react";

/**
 * Global Error Boundary.
 * Must be a Client Component to catch runtime React errors.
 * 
 * @param {Object} props
 * @param {Error & { digest?: string }} props.error
 * @param {() => void} props.reset
 * @returns {JSX.Element}
 */
export default function GlobalError({ error, reset }) {
  useEffect(() => {
    // Aquí podríamos conectar a Sentry o DataDog en el futuro
    console.error("Error capturado por Global Error Boundary:", error);
  }, [error]);

  return (
    <main>
      <ErrorState error={error} reset={reset} />
    </main>
  );
}
