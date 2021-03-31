import React from "react";
import CardNota from "../CardNota";
import "./estilo.css";
import { useSelector } from "react-redux";

function noteGenerator(result) {
  return (
    result.map(
      (result, index) => {
        return (<li className="lista-notas_item" key={index}>
          <CardNota title={result.title} text={result.text} />
        </li>)
      })
  )
}

function ListaDeNotas() {

  const result = useSelector(state => state.salvarNota);

  return (<ul className="lista-notas">
    {noteGenerator(result)}
  </ul >
  );
}

export default ListaDeNotas;
