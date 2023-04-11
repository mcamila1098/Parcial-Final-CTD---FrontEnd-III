import React, { useContext } from 'react'
import Form from '../Components/Form'
import { ThemeContext } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <h2>¿Deseas saber más?</h2>
      <p>Envíanos tus preguntas y con gusto te contactaremos</p>
      <Form/>
      <br/><br/>
    </div>
  )
}

export default Contact