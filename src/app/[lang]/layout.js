import { Montserrat, Bebas_Neue } from "next/font/google";
import { Navbar } from "@/shared/ui/Navbar/Navbar";
import { getDictionary } from "@/shared/i18n/get-dictionary";
import "../globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat-google",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-google",
  subsets: ["latin"],
  weight: ["400"],
});

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return {
    title: {
      template: '%s | BIM Constructions',
      default: dict.home?.metadata?.title || 'BIM Constructions — Ingeniería y Construcción Profesional',
    },
    description: dict.home?.metadata?.description || 'BIM Constructions ofrece servicios de ingeniería, construcción y gestión de proyectos con tecnología BIM de vanguardia.',
    openGraph: {
      title: dict.home?.metadata?.title,
      description: dict.home?.metadata?.description,
      url: 'https://bim-constructions.com',
      siteName: 'BIM Constructions',
      images: [{ url: '/images/proyectos/corporate_building_1784149314956.png', width: 1200, height: 630 }],
      locale: lang,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.home?.metadata?.title,
      description: dict.home?.metadata?.description,
      images: ['/images/proyectos/corporate_building_1784149314956.png'],
    }
  };
}

import { Footer } from "@/shared/ui/Footer/Footer";

/**
 * Root layout for the BIM Constructions application.
 * Includes the global Navbar and wraps all pages.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {Object} props.params
 * @param {string} props.params.lang
 * @returns {JSX.Element}
 */
export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} className={`${montserrat.variable} ${bebasNeue.variable}`}>
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh", margin: 0 }}>
        <Navbar dict={dict.navbar} lang={lang} />
        <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {children}
        </main>
        <Footer dict={dict.footer} lang={lang} />
      </body>
    </html>
  );
}

/**
 * Generates the static routes for all supported languages.
 * 
 * @returns {Array<{lang: string}>}
 */
export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }];
}
