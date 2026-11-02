import React from "react";

function Dest2(props) {
  return (
    <div>
      <h3>{props.titulo}</h3>
      <img src={props.imagen} alt={props.titulo} width="200" />
      <a href={props.github}>
          Ver en GitHub
        </a>
    </div>
  );
}

export default Dest2;