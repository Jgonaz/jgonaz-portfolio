import { i18n } from '@/i18n-config'
import '@/app/[lang]/_styles/languageSelector.css'

interface LanguageSelectorProps {
  className: string
  selectedLanguage: string
  onLanguageChange: (language: string) => void
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  className = '',
  selectedLanguage,
  onLanguageChange
}) => {
  return (
    <div className={`language-selector ${className}`}>
      <select
        value={selectedLanguage}
        onChange={e => onLanguageChange(e.target.value)}
      >
        {i18n['locales'].map(language => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
      <div className='arrow'></div>
    </div>
  )
}

export default LanguageSelector
