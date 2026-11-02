import React from 'react';
import { NavLink } from "react-router";

function Encabezado (){
	return (
	 	<div style={{ marginBottom: '40px' }}>
	  <nav   style={{
    		display: 'flex',
    		gap: '20px'
 			}}>
			<NavLink to="/Inicio" end>
			Inicio
			</NavLink>

			<NavLink to="/Servicios" end>
			Servicios
			</NavLink>

			<NavLink to="/Formacion" end>
			Formacion
			</NavLink>

			<NavLink to="/Porfolio" end>
			Porfolio
			</NavLink>

			<NavLink to="/Contacto" end>
			Contacto
			</NavLink>
	  </nav>
	 	</div> 
	);
}

export default Encabezado;