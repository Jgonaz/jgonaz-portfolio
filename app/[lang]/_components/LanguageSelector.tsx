import { Fragment, useContext, useState } from 'react'
import TranslationContext from '@/app/[lang]/_contexts/TranslationContext'
import { i18n } from '@/i18n-config'
import '@/app/[lang]/_styles/languageSelector.css'

interface LanguageSelectorProps {
  className?: string
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ className = '' }) => {
  const { dict, lang, setLanguage, preloadLanguage } = useContext(TranslationContext)
  // Idioma pulsado mientras se carga su diccionario: el indicador se desliza sin esperar
  const [pendingLanguage, setPendingLanguage] = useState<string | null>(null)
  const activeLanguage = pendingLanguage ?? lang
  const locales = i18n.locales
  const activeIndex = Math.max(0, locales.indexOf(activeLanguage as (typeof locales)[number]))

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    language: (typeof locales)[number]
  ) => {
    // Clics con modificadores (nueva pestaña, etc.) siguen el enlace nativo
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return
    event.preventDefault()
    if (language === activeLanguage) return
    setPendingLanguage(language)
    // El indicador y las letras se animan a la vez; al terminar, manda el idioma del contexto
    setLanguage(language).finally(() => setPendingLanguage(null))
  }

  return (
    <div
      role="group"
      aria-label={dict?.header?.language}
      className={`language-selector ${className}`}
      style={
        {
          '--lang-index': activeIndex
        } as React.CSSProperties
      }
    >
      {locales.map((language, index) => (
        <Fragment key={language}>
          {index > 0 && (
            <span className="language-selector-separator" aria-hidden="true">
              /
            </span>
          )}
          <a
            href={`/${language}`}
            hrefLang={language}
            lang={language}
            aria-label={dict?.header?.languages?.[language] ?? language}
            aria-current={language === activeLanguage ? 'true' : undefined}
            onClick={event => handleClick(event, language)}
            onPointerEnter={() => preloadLanguage(language)}
            onFocus={() => preloadLanguage(language)}
          >
            {language.toUpperCase()}
          </a>
        </Fragment>
      ))}
      <span className="language-selector-underline" aria-hidden="true" />
    </div>
  )
}

export default LanguageSelector
