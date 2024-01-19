import { i18n } from '@/i18n-config'

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
    <select
      className={className}
      id='language-select'
      value={selectedLanguage}
      onChange={e => onLanguageChange(e.target.value)}
    >
      {i18n['locales'].map(language => (
        <option key={language} value={language}>
          {language}
        </option>
      ))}
    </select>
  )
}

export default LanguageSelector
