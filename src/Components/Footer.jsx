import React, { useContext } from 'react'
import { ThemeContext } from './utils/global.context';
const Footer = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <footer className={`${darkMode ? "dark-footer" : "" }`}>
        <p>Powered by</p>
        <img src='/images/DH.png' alt='DH-logo' />
    </footer>
  )
}

export default Footer
