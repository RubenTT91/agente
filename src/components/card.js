import React from "react";
import "./card.css";

function card({ id, nombre, imgAgentes, habilidad, description }) {
  return (
      <div className="contenedorTarjeta">
        <div className="titulo">Agente #{id}</div>
        <p className="nombre">{nombre}</p>
        <img src={imgAgentes} alt="Imagen Agenstes" />
        <p>Habilidad: {habilidad}</p>
        <p>Descripción </p>
      </div>
  );
}

export default card;
