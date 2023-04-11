import React, { useEffect, useState, useContext } from 'react'
import Card from '../Components/Card'
import { ThemeContext } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [dentists,setDentists] = useState([]);
  const url = `https://jsonplaceholder.typicode.com/users`;

  const getData = async() => {
    const respuesta = await fetch(url);
    const respuestaToJson = await respuesta.json();
    setDentists(respuestaToJson);
  }

  useEffect(
    () => {
      getData()
    }
  )

  return (
    <main className={`${darkMode ? "dark" : ""}`}>
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentists.map(dentist => 
          <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id}/>  
        )}
      </div>
    </main>
  )
}

export default Home