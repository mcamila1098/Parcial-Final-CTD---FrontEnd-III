import React, { createContext, useReducer, useEffect } from "react";

export const ThemeContext = createContext();

/* const initialState = {
  darkMode: false,
}; */

const initialState = {
  darkMode: false,
  favs: JSON.parse(localStorage.getItem("favorite-dentists")) || [],
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHTMODE":
      return { ...state,darkMode: false };
    case "DARKMODE":
      return { ...state,darkMode: true };
    case "ADD_FAVS": 
      return {...state,favs: [...state.favs, action.payload]};
    case "REMOVE_FAVS":
      return {...state,favs: state.favs.filter((e) => e.id !== action.payload)};
    default:
      throw new Error(`Error on ${action.type}`)
  }
};

export function ThemeProvider({children}) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  useEffect(() => {
    localStorage.setItem("favorite-dentists", JSON.stringify(state.favs));
  }, [state.favs]);

  return <ThemeContext.Provider value={{ state, dispatch }}>{children}</ThemeContext.Provider>;
}



