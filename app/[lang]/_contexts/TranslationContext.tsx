'use client'

import { createContext, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { loadDictionary } from '@/app/i18n/load-dictionary'
import { i18n, type Locale } from '@/i18n-config'

type Dictionary = Record<string, any>

interface TranslationProviderProps {
  dict: Dictionary
  lang: string
  children?: React.ReactNode
}

interface TranslationContextValue {
  dict: Dictionary
  lang: string
  // Cambia el idioma sin recargar la página
  setLanguage: (lang: Locale) => Promise<void>
  // Descarga el diccionario de antemano para que el cambio sea inmediato
  preloadLanguage: (lang: Locale) => void
}

const TranslationContext = createContext<TranslationContextValue>({
  dict: {},
  lang: 'es',
  setLanguage: async () => {},
  preloadLanguage: () => {}
})

// Ruta del idioma indicado conservando el resto de la URL (query y fragmento)
const buildLanguageUrl = (lang: Locale) => {
  const { pathname, search, hash } = window.location
  return `${pathname.replace(/^\/[^/]+/, `/${lang}`)}${search}${hash}`
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({
  dict,
  lang,
  children
}) => {
  const [state, setState] = useState({ lang, dict })
  const [serverProps, setServerProps] = useState({ lang, dict })
  const requestId = useRef(0)
  // Idioma vigente (o ya elegido y pendiente de pintar) para descartar cambios al idioma
  // activo. setLanguage lo actualiza a la vez que el estado, no tras el commit: un clic
  // que llega antes de que se pinte el cambio debe ver ya el idioma nuevo. El efecto de
  // abajo lo alinea cuando el idioma llega del servidor.
  const currentLang = useRef(lang)

  // Si el servidor entrega otro idioma (navegación de Next que vuelve a renderizar el
  // layout), el estado se sincroniza con él. Se compara con las props anteriores, no con
  // el estado, para no deshacer un cambio de idioma hecho en el navegador.
  if (serverProps.lang !== lang || serverProps.dict !== dict) {
    setServerProps({ lang, dict })
    setState({ lang, dict })
  }
  useEffect(() => {
    currentLang.current = lang
  }, [lang])

  const setLanguage = useCallback(async (next: Locale) => {
    if (next === currentLang.current) {
      // Volver al idioma vigente cancela un cambio pendiente (cambios rápidos)
      requestId.current++
      return
    }
    // Solo cuenta la última petición: con cambios rápidos gana el último idioma elegido
    const id = ++requestId.current
    try {
      const nextDict = await loadDictionary(next)
      if (id !== requestId.current) return
      currentLang.current = next
      setState({ lang: next, dict: nextDict })
      // replaceState (no push) para que «Atrás» no deshaga el cambio de idioma. Se pasa
      // el state actual porque Next guarda ahí su información de navegación.
      window.history.replaceState(window.history.state, '', buildLanguageUrl(next))
      document.documentElement.lang = next
      // En desarrollo el layout fija un título propio con el prefijo [DEV]
      if (process.env.NODE_ENV !== 'development' && nextDict.metadata?.title) {
        document.title = nextDict.metadata.title
      }
    } catch {
      if (id !== requestId.current) return
      window.location.assign(buildLanguageUrl(next))
    }
  }, [])

  // La URL manda. Tras un cambio en el navegador, Next guarda su árbol con el idioma
  // anterior; al volver con «Atrás» lo restaura y el layout entrega ese idioma aunque la
  // URL sea la del nuevo. Si no coinciden, se pasa al idioma de la URL.
  useEffect(() => {
    const urlLang = window.location.pathname.split('/')[1]
    if ((i18n.locales as readonly string[]).includes(urlLang) && urlLang !== lang) {
      // setLanguage solo cambia el estado tras cargar el diccionario (asíncrono)
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguage(urlLang as Locale)
    }
  }, [lang, dict, setLanguage])

  const preloadLanguage = useCallback((next: Locale) => {
    loadDictionary(next).catch(() => {})
  }, [])

  const value = useMemo(
    () => ({ ...state, setLanguage, preloadLanguage }),
    [state, setLanguage, preloadLanguage]
  )

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  )
}

export default TranslationContext
