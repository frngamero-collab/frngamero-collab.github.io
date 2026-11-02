import React from 'react';
import Dest from './Dest2';
import imagen21 from '../img/imagen21.jpeg';
import imagen22 from '../img/imagen22.jpg';


function Portfolio () {

	const Data =[
		{
			id:21,
			titulo:'AppNotas',
			imagen:imagen21,
			github:'https://github.com/frngamero-collab/AppNotas.git'
		
		},
		{
			id:22,
			titulo:'Pagina Web',
			imagen:imagen22,
			github:'https://github.com/frngamero-collab/frngamero-collab.github.io.git'
		
		
		},

	];
	
return (
  <>
    <h2>Porfolio</h2>

    {Data.map((d) => (
      <Dest
        key={d.id}
        titulo={d.titulo}
        imagen={d.imagen}
		github={d.github}
      />
    ))}
  </>
);
}

export default Portfolio;