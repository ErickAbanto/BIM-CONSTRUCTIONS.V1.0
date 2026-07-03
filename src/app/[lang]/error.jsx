"use client";

import { ErrorState } from "@/shared/ui/ErrorState/ErrorState";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import esDict from "@/shared/i18n/dictionaries/common/es.json";
import enDict from "@/shared/i18n/dictionaries/common/en.json";

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
  const params = useParams();
  const lang = params?.lang === "en" ? "en" : "es";
  const dict = lang === "en" ? enDict.errors.serverError : esDict.errors.serverError;

  useEffect(() => {
    // Aquí podríamos conectar a Sentry o DataDog en el futuro
    console.error("Error capturado por Global Error Boundary:", error);
  }, [error]);

  return (
    <main>
      <ErrorState error={error} reset={reset} dict={dict} lang={lang} />
    </main>
  );
}
