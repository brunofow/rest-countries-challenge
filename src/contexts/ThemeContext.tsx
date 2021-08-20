import { ReactNode, useState } from 'react'
import {createContext} from 'react'
import { setCookie, parseCookies } from 'nookies'
import { DefaultTheme } from 'styled-components'
import { combineTheme, dark, light } from '../styles/themes'
import { useEffect } from 'react'

type ProviderProps = {
  children: ReactNode
}

type ThemeContextProps = {
  theme: DefaultTheme,
  toggleTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextProps)

export function ThemeProvider({ children }: ProviderProps) {
  const [theme, setTheme] = useState<DefaultTheme>(combineTheme(light))

  useEffect(() => {
    const { actualTheme } = parseCookies()
    setTheme(actualTheme === 'light' ? combineTheme(light) : combineTheme(dark))
  }, [])

  useEffect(() => {
    setCookie(null, 'actualTheme', theme.title)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? combineTheme(dark) : combineTheme(light))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }} >
      {children}
    </ThemeContext.Provider>
  )
}