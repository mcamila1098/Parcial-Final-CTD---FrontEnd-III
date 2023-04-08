import React, { useState } from "react";
import {Link} from 'react-router-dom';



const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  const [idDentist,setIdDentist] = useState(1);

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <p>{name}</p>
        <p>{username}</p>
        {/* <p>{id}</p> */}
        <p><Link to={`/dentist/${id}`}>{id}</Link></p>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
