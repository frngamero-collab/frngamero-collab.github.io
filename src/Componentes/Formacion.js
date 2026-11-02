import React, { useState } from 'react';
import imagen5 from '../img/imagen5.jpg';



function Formacion (){

	const [mostrarImagen, setMostrarImagen] = useState(false);

	function handleClick() {
    setMostrarImagen(!mostrarImagen);
  	}

	return (
	 <>
	  <h2>Formacion</h2>

      <div style={{ marginBottom: '60px' }}>
	  <h3>Tecnicatura Universitaria en Programación – Desarrollo de Aplicaciones</h3>
	  <h4>UPATECO | Mar. 2025 – Presente</h4>
	  </div>


	  <div style={{ marginBottom: '60px' }}>
	  <h3>Diplomatura en Sistemas de Video Observación Aplicados a la Seguridad</h3>
	  <h4>Instituto Universitario Juan Vucetich | May. 2024 – Oct. 2024</h4>
      <button onClick={handleClick}>
       Ver Certificado/Ocultar
      </button>
	  {mostrarImagen && (
	  	<img
	    	src={imagen5}
        	width="600"/>
	  )}
	  </div>

      <div style={{ marginBottom: '60px' }}>
	  <h3>Gestión de Infraestructura en Tecnología de la Información</h3>
	  <h4>Instituto Universitario Juan Vucetich | Abr. 2026 – Oct. 2026</h4>	  
	  <h5>(Certificacion de Titulo en Tramite)</h5>
	  </div>
	 </>
	);
}


export default Formacion;