import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useContext } from 'react'
import { ThemeContext } from '../Components/utils/global.context'
//import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const params = useParams();
  const [datosDentista, setDatosDentista] = useState({});
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  const getDentistData = async() => {
    await axios.get(url)
      .then(res => setDatosDentista(res.data))
      .catch(err => console.log(err))
  }

  useEffect(
    () => {
      getDentistData();
    }
  )

  return (
    <div className={`${darkMode ? "dark" : "div"}`}>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table className={`${darkMode ? "dark" : "div"}`}>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Teléfono</th>
          <th>Website</th>
        </tr>
        <tr>
          <th>{datosDentista.name}</th>
          <th>{datosDentista.email}</th>
          <th>{datosDentista.phone}</th>
          <th>{datosDentista.website}</th>
        </tr>
      </table>
      
    </div>
  )
}

export default Detail