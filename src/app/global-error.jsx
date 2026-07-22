"use client";

import { Button } from "@/shared/ui/Button/Button";

/**
 * Global error boundary for the root layout.
 * Must include <html> and <body> tags as it replaces the root layout.
 * Uses unstable_retry (Next.js 16) for re-fetching error recovery.
 *
 * @param {Object} props
 * @param {Error & { digest?: string }} props.error
 * @param {() => void} props.reset
 * @returns {JSX.Element}
 */
export default function GlobalError({ error, reset }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, fontFamily: "'Montserrat', sans-serif" }}>
        <main
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100dvh",
            padding: "2rem",
            textAlign: "center",
            gap: "1rem",
          }}
        >
          <div role="alert">
            <h1 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Algo salió mal</h1>
            <p style={{ color: "#6b7280", marginBottom: "1.5rem" }}>
              Ocurrió un error inesperado en la aplicación. Por favor, intenta de nuevo.
            </p>
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <button
              onClick={reset}
              style={{
                padding: "0.75rem 1.5rem",
                backgroundColor: "#223c91",
                color: "white",
                border: "none",
                borderRadius: "0.5rem",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              Reintentar
            </button>
            <a
              href="/"
              style={{
                padding: "0.75rem 1.5rem",
                backgroundColor: "transparent",
                color: "#223c91",
                border: "2px solid #223c91",
                borderRadius: "0.5rem",
                cursor: "pointer",
                fontSize: "1rem",
                textDecoration: "none"
              }}
            >
              Volver al Inicio / Back to Home
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
