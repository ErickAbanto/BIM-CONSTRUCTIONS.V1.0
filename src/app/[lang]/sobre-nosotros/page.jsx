import { getDictionary } from "@/shared/i18n/get-dictionary";
import { SobreHero } from "@/features/sobre-nosotros/components/SobreHero/SobreHero";
import { ConoceBanner } from "@/features/sobre-nosotros/components/ConoceBanner/ConoceBanner";
import { ConoceHistoria } from "@/features/sobre-nosotros/components/ConoceHistoria/ConoceHistoria";
import { MisionVision } from "@/features/sobre-nosotros/components/MisionVision/MisionVision";
import { Valores } from "@/features/sobre-nosotros/components/Valores/Valores";
import { StatsSection } from "@/features/sobre-nosotros/components/StatsSection/StatsSection";

/**
 * Sobre Nosotros page — Server Component.
 * Quiénes somos, historia, misión, visión y valores de BIM Constructions J/J S.A.C.
 *
 * @param {Object} props
 * @param {Promise<{lang: 'en' | 'es'}>} props.params
 * @returns {Promise<JSX.Element>}
 */
export default async function SobreNosotrosPage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.sobreNosotros;

  return (
    <main>
      {/* 1 — Hero con imagen de fondo y texto "Quiénes Somos", incluye el banner oscuro en la parte inferior */}
      <SobreHero lang={lang} dict={t.hero} bannerDict={t.banner} />

      {/* 3 — Historia de la empresa + Feature cards */}
      <ConoceHistoria dict={t.historia} />

      {/* 4 — Misión y Visión */}
      <MisionVision dict={{ mision: t.mision, vision: t.vision }} />

      {/* 5 — Valores que nos identifican */}
      <Valores dict={t.valores} />

      {/* 6 — Métricas + CTA de contacto */}
      <StatsSection lang={lang} dict={t.stats} />
    </main>
  );
}

/** @type {import('next').Metadata} */
export const metadata = {
  title: "Sobre Nosotros | BIM Constructions",
  description:
    "Conoce la historia, misión y visión de BIM Constructions J/J S.A.C. Expertos en construcción, ingeniería y gestión de proyectos con tecnología BIM de vanguardia.",
};