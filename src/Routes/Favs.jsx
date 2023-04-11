import React, {useContext} from "react";
import Card from "../Components/Card";
import { ThemeContext } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const { state } = useContext(ThemeContext)

  return (
    // <div style={{background:Theme.backgroundHome, color:Theme.color}}>
    <div className={`${darkMode ? "dark" : ""}`}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {state.favs &&
          state.favs.map((d) => (
            <Card
              key={d.id}
              name={d.name}
              username={d.username}
              id={d.id}
              fav={true}
            />
          ))}
      </div>
    </div>
  );
};

export default Favs;
