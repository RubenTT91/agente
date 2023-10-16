import "./cards.css";
import Card from "./card";
import React from "react";
import chihuahua from "./imgAgentes/agt_chihuahua.png";
import gallina from "./imgAgentes/agt_gallina.png";
import ganzo from "./imgAgentes/agt_ganzo.png";
import mapache from "./imgAgentes/agt_mapache.png";
import mono from "./imgAgentes/agt_mono.png";
import panda from "./imgAgentes/agt_panda.jpeg";
import planta from "./imgAgentes/agt_planta.png";
import tortuga from "./imgAgentes/agt_tortuga.png";
import cocodrilo from "./imgAgentes/agt_cocodrilo.png";
import elefante from "./imgAgentes/agt_elefante.png";
import hodor from './imgAgentes/agt_hodor.jpg';
import simona from './imgAgentes/agt_simona.png';

const agentesInfo = [
  {
    id: 1,
    nombre: "Chihuahua",
    imgAgentes: chihuahua,
    habilidad: "Tembladera",
    description: "ABDX",
  },
  {
    id: 2,
    nombre: "Cocodrilo",
    imgAgentes: cocodrilo,
    habilidad: "Mordida",
    description: "ABDX",
  },
  {
    id: 3,
    nombre: "Elefante",
    imgAgentes: elefante,
    habilidad: "Memoria",
    description: "ABDX",
  },
  {
    id: 4,
    nombre: "Gallina",
    imgAgentes: gallina,
    habilidad: "Picotazo",
    description: "ABDX",
  },
  {
    id: 5,
    nombre: "Ganzo",
    imgAgentes: ganzo,
    habilidad: "Elegancia",
    description: "ABDX",
  },
  {
    id: 6,
    nombre: "Mapache",
    imgAgentes: mapache,
    habilidad: "Espionaje",
    description: "ABDX",
  },
  {
    id: 7,
    nombre: "Mono",
    imgAgentes: mono,
    habilidad: "Memoria",
    description: "ABDX",
  },
  {
    id: 8,
    nombre: "Panda",
    imgAgentes: panda,
    habilidad: "Ternura",
    description: "ABDX",
  },
  {
    id: 9,
    nombre: "Planta",
    imgAgentes: planta,
    habilidad: "Quietud",
    description: "ABDX",
  },
  {
    id: 10,
    nombre: "Tortuga",
    imgAgentes: tortuga,
    habilidad: "cobertura",
    description: "ABDX",
  },
  {
    id:11, 
    nombre: "Hodor",
    imgAgentes:hodor,
    habilidad:"Mirada Oblicua ",
    description:"Parte de "
  },
  {
    id:12, 
    nombre: "Simona",
    imgAgentes:simona,
    habilidad:"Vuelo",
    description:"Vuelo"
  }
];

function cards() {
  return (
    <div className="contenedorPrincipal">
      <div className="body">
        {agentesInfo.map((agentes) => (
          <Card
            id={agentes.id}
            imgAgentes={agentes.imgAgentes}
            nombre={agentes.nombre}
            habilidad={agentes.habilidad}
            description={agentes.description}
          />
        ))}
      </div>
    </div>
  );
}

export default cards;
