import React from "react";
import Card from "../Components/Card";
import { useContext } from "react";
//import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  //const {Theme} = useContext(ContextGlobal)

  return (
    // <div style={{background:Theme.backgroundHome, color:Theme.color}}>
    <div>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </div>
  );
};

export default Favs;
