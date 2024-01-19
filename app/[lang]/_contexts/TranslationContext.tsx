'use client'

import { createContext } from 'react'

interface TranslationContextProps {
  dict: Record<string, any>
  lang: string
  children?: React.ReactNode
}

const TranslationContext = createContext<TranslationContextProps>({
  dict: {},
  lang: 'es'
})

export const TranslationProvider: React.FC<TranslationContextProps> = ({
  dict,
  lang,
  children
}) => {
  return (
    <TranslationContext.Provider value={{ dict, lang }}>
      {children}
    </TranslationContext.Provider>
  )
}

export default TranslationContext
