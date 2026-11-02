import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { BrowserRouter, Routes, Route } from "react-router";
import Encabezado from './Componentes/Encabezado';
import PiePagina from './Componentes/PiePagina';
import Inicio from './Componentes/Inicio';
import Contacto from './Componentes/Contacto';
import Servicios from './Componentes/Servicios';
import Formacion from './Componentes/Formacion';
import Porfolio from './Componentes/Porfolio';
import NoExiste from './Componentes/NoExiste';

function App() {
  return (
    <>
	  <BrowserRouter>
	   <Encabezado/>
		<Routes>
			<Route path="/PiePagina" element={<PiePagina />} />
 			<Route path="/" element={<Inicio />} />
			<Route path="/Inicio" element={<Inicio />} /> 
			<Route path="/Formacion" element={<Formacion />} />    
			<Route path="/Contacto" element={<Contacto />} />
			<Route path="/Servicios" element={<Servicios />} />
			<Route path="/Porfolio" element={<Porfolio />} />
			<Route path="/*" element={<NoExiste />} />
		</Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
