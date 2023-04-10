import React, { useContext } from 'react';
import { ThemeContext } from "./utils/global.context";
import {Link} from 'react-router-dom';
//import { GlobalState } from './utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const onClick = () => {
    if (darkMode) {
      theme.dispatch({ type: "LIGHTMODE" });
    } else {
      theme.dispatch({ type: "DARKMODE" });
    }
  };

  return (
        <nav className={`${darkMode ? "dark-nav" : "nav"}`}>
        <span>
          <strong>D</strong>
          H Odonto
        </span>
          <Link to ="/home" className='link-nav'>Home</Link>
          <Link to="/contacto" className='link-nav'>Contacto</Link>
          <Link to="/favs" className='link-nav'>Destacados</Link>
          <button onClick={onClick} className='button-nav'>
            {darkMode ? "🌞" : "🌛"}  
          </button>
      </nav>
  );
}

export default Navbar