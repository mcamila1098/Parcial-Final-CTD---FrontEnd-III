import React, { useContext, useState } from 'react';
import {Link} from 'react-router-dom';
import { ContextGlobal } from './utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { Theme, handleThemeChange } = useContext(ContextGlobal)

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to ="/home">Home</Link>
      <Link to="/contacto">Contacto</Link>
      <Link to="/favs">Destacados</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={handleThemeChange}>Cambiar Tema</button>
    </nav>
  )
}

export default Navbar