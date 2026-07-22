import 'server-only';

const dictionaries = {
  en: async () => {
    const common = await import('./dictionaries/common/en.json').then((m) => m.default).catch(() => ({}));
    const home = await import('./dictionaries/home/en.json').then((m) => m.default).catch(() => ({}));
    const sobreNosotros = await import('./dictionaries/sobre-nosotros/en.json').then((m) => m.default).catch(() => ({}));
    const proyectos = await import('./dictionaries/proyectos/en.json').then((m) => m.default).catch(() => ({}));
    const servicios = await import('./dictionaries/servicios/en.json').then((m) => m.default).catch(() => ({}));
    const contacto = await import('./dictionaries/contacto/en.json').then((m) => m.default).catch(() => ({}));
    return { navbar: common.navbar, footer: common.footer, home, sobreNosotros, proyectos, servicios, contacto, errors: common.errors };
  },
  es: async () => {
    const common = await import('./dictionaries/common/es.json').then((m) => m.default).catch(() => ({}));
    const home = await import('./dictionaries/home/es.json').then((m) => m.default).catch(() => ({}));
    const sobreNosotros = await import('./dictionaries/sobre-nosotros/es.json').then((m) => m.default).catch(() => ({}));
    const proyectos = await import('./dictionaries/proyectos/es.json').then((m) => m.default).catch(() => ({}));
    const servicios = await import('./dictionaries/servicios/es.json').then((m) => m.default).catch(() => ({}));
    const contacto = await import('./dictionaries/contacto/es.json').then((m) => m.default).catch(() => ({}));
    return { navbar: common.navbar, footer: common.footer, home, sobreNosotros, proyectos, servicios, contacto, errors: common.errors };
  },
};

/**
 * Gets the dictionary for the specified locale.
 *
 * @param {'en' | 'es'} locale
 * @returns {Promise<Object>}
 */
export const getDictionary = async (locale) => (dictionaries[locale] || dictionaries.es)();
