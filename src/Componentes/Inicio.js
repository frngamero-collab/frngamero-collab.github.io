import React from 'react';
import logo from '../img/logo.png';

function Inicio (){
	return (
	 <>
	 	<div style={{ marginBottom: '30px' }}>
		<img src={logo} alt="Desarrollo de Software y Tecnologias Aplicadas" width="100"/>
		</div>
	   <div style={{ marginBottom: '60px' }}>
	   <h2>Desarrollo de Software y Tecnologias Aplicadas</h2>
	   </div>
<div style={{ marginBottom: '60px', maxWidth: '600px' }}>
	   <p>Soy Francisco Gamero estudiante de Programación y desarrollador de software. Ayudo a personas, emprendedores y pequeñas empresas a mejorar su trabajo aplicando tecnológicas que se adapten a sus necesidades. Mi objetivo es desarrollar aplicaciones y herramientas que aporten valor, eficiencia y crecimiento a cada proyecto.</p>
		</div>
	 </>
	);
}

export default Inicio;