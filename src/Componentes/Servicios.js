import React from 'react';
import Dest from './Dest';
import imagen1 from '../img/imagen1.jpg';
import imagen2 from '../img/imagen2.jpg';
import imagen3 from '../img/imagen3.jpg';
import imagen4 from '../img/imagen4.jpg';

function Servicios () {

	const Data =[
		{
			id:1,
			titulo:'Programacion de Software',
			imagen:imagen1,
		
		},
				{
			id:2,
			titulo:'Programacion de Web',
			imagen:imagen2,
		
		},
		{
			id:3,
			titulo:'Soporte para Base de Datos',
			imagen:imagen3,
		},
		{
			id:4,
			titulo:'Tecnologias de Conectividad y Videovigilancia',
			imagen:imagen4,
		},
	];
	
return (
  <>
    <h2>Servicios</h2>

    {Data.map((d) => (
      <Dest
        key={d.id}
        titulo={d.titulo}
        imagen={d.imagen}
      />
    ))}
  </>
);
}

export default Servicios;