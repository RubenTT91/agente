import React from "react";
import "./card.css";

function card({ id, nombre, imgAgentes, habilidad, description }) {
  return (
    <div className="contenedorTarjeta">
      <img src={imgAgentes} alt="Imagen Agenstes" />
      <div className="titulo">Agente #{id}</div>
      <p className="nombre">{nombre}</p>
      <div className="textoDescriptivo">
        <p className="habilidad">
          <strong>Habilidad:</strong> {habilidad}
        </p>
        {/* <p className="descripcion">
          <strong>Descripción:</strong> {description}
        </p> */}
      </div>
    </div>
  );
}

export default card;
