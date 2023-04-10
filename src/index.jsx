import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './Routes/Home'
import Contacto from './Routes/Contact'
import Favs from './Routes/Favs'
import Detail from './Routes/Detail'
//import { ContextProvider, ThemeProvider } from './Components/utils/global.context';
import { ThemeProvider } from './Components/utils/global.context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ContextProvider> */}
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>} >
            <Route path='home' element={<Inicio/>} />
            <Route path='contacto' element={<Contacto/>} />
            <Route path='favs' element={<Favs/>} />
            <Route path='dentist/:id' element={<Detail/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    {/* </ContextProvider> */}
  </React.StrictMode>
);


