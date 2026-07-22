import { getDictionary } from "@/shared/i18n/get-dictionary";
import { SobreHero } from "@/features/sobre-nosotros/components/SobreHero/SobreHero";
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
      <SobreHero lang={lang} dict={t.hero} bannerDict={t.banner} />

      <ConoceHistoria dict={t.historia} />

      <MisionVision dict={{ mision: t.mision, vision: t.vision }} />

      <Valores dict={t.valores} />

      <StatsSection lang={lang} dict={t.stats} />
    </main>
  );
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return {
    title: dict.sobreNosotros?.metadata?.title || 'Sobre Nosotros',
    description: dict.sobreNosotros?.metadata?.description || 'Conoce la historia, misión y visión de BIM Constructions J/J S.A.C.',
  };
}