import React from 'react'
import Form from '../Components/Form'
import { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  
  return (
    <div>
      <h2>¿Deseas saber más?</h2>
      <p>Envíanos tus preguntas y con gusto te contactaremos</p>
      <Form/>
    </div>
  )
}

export default Contact