import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import { ThemeContext } from "./utils/global.context";



const Card = ({ name, username, id }) => {

  const { state, dispatch } = useContext(ThemeContext);
  const fav = state.favs.some((e) => e.id === id);
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    fav
      ? dispatch({ type: "REMOVE_FAVS", payload: id })
      : dispatch({
          type: "ADD_FAVS",
          payload: { name, username, id},
        });
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <img width = "200" height = "200" src="/images/doctor.jpg" alt="doctorPicture"/>
        <p>{name}</p>
        <p>{username}</p>
        <p><Link to={`/dentist/${id}`}>{id}</Link></p>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">
          {fav? "💓": "📜" }
        </button>
    </div>
  );
};

export default Card;
