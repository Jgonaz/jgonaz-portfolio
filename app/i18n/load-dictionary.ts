import type { Locale } from '@/i18n-config'

// Cargador de diccionarios para el navegador (el de servidor, get-dictionary.ts, es
// `server-only`). Cada idioma es un import dinámico, así que el bundler genera un chunk
// por idioma que solo se descarga al cambiar o al precargar.
const dictionaries: Record<Locale, () => Promise<Record<string, any>>> = {
  es: () => import('@/app/i18n/locales/es.json').then(module => module.default),
  en: () => import('@/app/i18n/locales/en.json').then(module => module.default)
}

export const loadDictionary = (locale: Locale) => dictionaries[locale]()
