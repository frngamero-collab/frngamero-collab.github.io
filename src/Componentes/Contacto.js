import React from 'react';
import Formulario from './Formulario';

function Contacto (){
	return (
	 <>
	  <h2>Contacto</h2>
	      <p>Direccion: Olavarría, Buenos Aires</p>
          <p>Telefono: 2284-234099</p>
          <p>Mail: frn.gamero@gmail.com</p>
          <p>
        LinkedIn:{' '}
        <a href="https://www.linkedin.com/in/francisco-gamero-a715a9388/"> Ver perfil
        </a>
      </p>
	  
	  <h4>Puedes enviar un mensaje ingresando tu nombre y correo electronico:</h4>
	  <Formulario/>
	 </>
	);
}

export default Contacto;