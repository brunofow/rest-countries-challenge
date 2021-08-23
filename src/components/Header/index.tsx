import { useContext } from 'react'
import { HiMoon, HiSun } from 'react-icons/hi'
import { ThemeContext } from '../../contexts/ThemeContext'
import {
  HeaderStyles
} from '../../styles/components/header'


export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <HeaderStyles>
      <h4>Where in the world?</h4>
      <span onClick={toggleTheme} >{theme.title === 'light' ? <HiMoon size={20} /> : <HiSun size={20} />}
        {theme.title === 'light' ? "Dark Theme" : "Light Theme"}
      </span>
    </HeaderStyles>
  )
}