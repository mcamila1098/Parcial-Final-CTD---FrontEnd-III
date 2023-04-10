import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useContext } from 'react'
//import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  //const { Theme } = useContext(ContextGlobal)

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
    // <div style={{background:Theme.backgroundHome, color:Theme.color}}>
    <div>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      {datosDentista.name}
      <br/>
      {datosDentista.email}
      <br/>
      {datosDentista.phone}
      <br/>
      {datosDentista.website}
    </div>
  )
}

export default Detail