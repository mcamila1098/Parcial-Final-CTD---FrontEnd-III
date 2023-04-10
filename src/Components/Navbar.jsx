import React, { useContext, useState } from 'react';
import { ThemeContext } from "./utils/global.context";
import {Link} from 'react-router-dom';
//import { GlobalState } from './utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  /* const { Theme, handleThemeChange } = useContext(ContextGlobal)

  return (
    <nav>
      /* Aqui deberan agregar los liks correspondientes a las rutas definidas 
      <Link to ="/home">Home</Link>
      <Link to="/contacto">Contacto</Link>
      <Link to="/favs">Destacados</Link>
      /* Deberan implementar ademas la logica para cambiar de Theme con el button 
      <button onClick={handleThemeChange}>Cambiar Tema</button>
    </nav>
  ) */

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
    <nav>
      <Link to ="/home">Home</Link>
      <Link to="/contacto">Contacto</Link>
      <Link to="/favs">Destacados</Link>
      <button onClick={onClick}>Cambiar Tema</button>
    </nav>
  );
}

export default Navbar