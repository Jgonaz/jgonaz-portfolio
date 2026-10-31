import { Fragment, useContext, useState } from 'react'
import TranslationContext from '@/app/[lang]/_contexts/TranslationContext'
import { i18n } from '@/i18n-config'
import '@/app/[lang]/_styles/languageSelector.css'

interface LanguageSelectorProps {
  className?: string
  selectedLanguage: string
  onLanguageChange: (language: string) => void
}

// Duración del deslizamiento del indicador; debe coincidir con --lang-switch-duration
const SWITCH_DURATION_MS = 380

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  className = '',
  selectedLanguage,
  onLanguageChange
}) => {
  const { dict } = useContext(TranslationContext)
  const [activeLanguage, setActiveLanguage] = useState(selectedLanguage)
  const locales = i18n.locales
  const activeIndex = Math.max(0, locales.indexOf(activeLanguage as (typeof locales)[number]))

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, language: string) => {
    // Clics con modificadores (nueva pestaña, etc.) siguen el enlace nativo
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return
    event.preventDefault()
    if (language === activeLanguage) return
    setActiveLanguage(language)
    // El cambio de idioma recarga la página: se espera a que el indicador termine de
    // deslizarse para que la animación se vea, salvo con movimiento reducido
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.setTimeout(() => onLanguageChange(language), reducedMotion ? 0 : SWITCH_DURATION_MS)
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
