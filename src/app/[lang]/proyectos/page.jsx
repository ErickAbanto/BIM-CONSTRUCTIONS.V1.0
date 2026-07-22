import { getDictionary } from "@/shared/i18n/get-dictionary";
import { ProyectosHero } from "@/features/proyectos/components/ProyectosHero/ProyectosHero";
import { NuestrosProyectos } from "@/features/proyectos/components/NuestrosProyectos/NuestrosProyectos";
import { PorQueElegirnos } from "@/features/proyectos/components/PorQueElegirnos/PorQueElegirnos";
import { NuestroProceso } from "@/features/proyectos/components/NuestroProceso/NuestroProceso";
import { ContactCTA } from "@/shared/ui/ContactCTA/ContactCTA";

/**
 * Proyectos page — Server Component.
 *
 * @param {Object} props
 * @param {Promise<{ lang: string }>} props.params
 * @returns {Promise<JSX.Element>}
 */
export default async function ProyectosPage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main>
      <ProyectosHero dict={dict.proyectos?.hero} lang={lang} />
      <NuestrosProyectos dict={dict.proyectos?.nuestrosProyectos} lang={lang} />
      <PorQueElegirnos dict={dict.proyectos?.porQueElegirnos} />
      <NuestroProceso dict={dict.proyectos?.nuestroProceso} />
      <ContactCTA dict={dict.proyectos?.cta} formDict={dict.contacto?.details?.form} />
    </main>
  );
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return {
    title: dict.proyectos?.metadata?.title || 'Proyectos',
    description: dict.proyectos?.metadata?.description || 'Descubre los proyectos de construcción e ingeniería realizados por BIM Constructions.',
  };
}
