'use client'

import { createContext } from 'react'

const TranslationContext = createContext<Record<string, any> | null>(null)

export const TranslationProvider: React.FC<{
  dict: Record<string, any>
  children: React.ReactNode
}> = ({ children, dict }) => {
  return (
    <TranslationContext.Provider value={dict}>
      {children}
    </TranslationContext.Provider>
  )
}

export default TranslationContext
