import React, { useState } from "react";


const Form = () => {

  const [nombre,setNombre] = useState('');
  const [correo,setCorreo] = useState('');
  const [esValido, setEsValido] = useState(false);
  const [mensaje, setMensaje] = useState('');
  const [mensajeError, setMensajeError] = useState('');
  //Aqui deberan implementar el form completo con sus validaciones

  const handleChangeNombre = (e) => {
    setNombre(e.target.value);  
  }

  const handleChangeCorreo = (e) => {
    setCorreo(e.target.value);  
  }

  const handlerSubmit = (e) =>{
    e.preventDefault();
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(nombre.length > 5 && correo.match(mailformat)){
      setEsValido(true);
      setMensaje(`Gracias ${nombre}, te contactaremos cuando antes vía mail`);
      setMensajeError('');
    }else{
      setEsValido(false);
      setMensajeError('Por favor verifique su información nuevamente');
      setMensaje('');
    }
  }

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <label>Nombre completo: </label>
        <input
            type="text"
            placeholder="Ingresa tu nombre completo"
            value={nombre}
            onChange={handleChangeNombre}
          />
        <label>Email: </label>
        <input
            type="text"
            placeholder="Ingresa tu correo electrónico"
            value={correo}
            onChange={handleChangeCorreo}
          />
        <br/>
        <button type="submit">Enviar</button>
        {esValido?<p>{mensaje}</p>:<p>{mensajeError}</p>}
      </form>
    </div>
  );
};

export default Form;
