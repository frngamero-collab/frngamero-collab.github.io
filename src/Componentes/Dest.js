import React from "react";

function Dest(props) {
  return (
    <div>
      <h3>{props.titulo}</h3>
      <img src={props.imagen} alt={props.titulo} width="400" />
    </div>
  );
}

export default Dest;