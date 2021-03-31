import React from "react";
import "./style.css"

function NoteCard(props) {
  return (
    <section className="card-nota">
      <header className="card-nota_cabecalho">
        <h3 className="card-nota_title">{props.title}</h3>
      </header>
      <p className="card-nota_text">{props.text}</p>
    </section>
  );
}

export default NoteCard;
