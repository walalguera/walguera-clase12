import React from "react";
import {Header} from './Componentes/header/Header.js';
import {Carrito} from './Componentes/carrito/Carrito.js';
import {DataProvider} from './context/DataProvider.js';
import {BrowserRouter as Router} from 'react-router-dom';
import Pages from './page/inicio.js';
import 'boxicons'


function App() {

  return ( 
    <DataProvider>
        <div className ="App">
            <Router />
            <Header />
            <Carrito />
            <Pages />
            <Router />
        </div> 
     </DataProvider>
);
}

export default App;
