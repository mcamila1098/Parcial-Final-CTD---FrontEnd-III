import { createContext } from "react";
import { useState } from "react";

/* export const initialState = {theme: "", data: []}

export const themes = {
  light: {
    font: 'black',
    background: 'white'
  },
  dark: {
    font: 'white',
    background: 'black'
  }
};

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  return (
    <ContextGlobal.Provider value={{}}>
      {children}
    </ContextGlobal.Provider>
  );
}; */

export const initialState = {
  themes: {
      light: {
          backgroundNavbar:"rgb(223, 219, 219)",
          backgroundHome:"white",
          backgroundFooter:"#cb3234",
          color:"black"
      },
      dark: {
          backgroundNavbar:"#161616",
          backgroundHome:"#12121296",
          backgroundFooter:"#161616",
          color:"white"
      }
  },
}

export const ContextGlobal = createContext(initialState); // Exporta context global

export const ContextProvider = ({ children }) => { // Exporta provider del contexto global

    // Context de los Themes
    const [Theme, setTheme] = useState(initialState.themes.light)
    const handleThemeChange = () => {
    if(Theme === initialState.themes.dark){
        setTheme(initialState.themes.light)
    } 
    else if(Theme === initialState.themes.light){
        setTheme(initialState.themes.dark)
    } 
    }
    // This is the context of the favorites

    return (
        <ContextGlobal.Provider value={{Theme, handleThemeChange}}>
            {children}
        </ContextGlobal.Provider>
    );
};





