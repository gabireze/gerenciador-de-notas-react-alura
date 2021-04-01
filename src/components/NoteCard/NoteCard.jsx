import React from "react";
import "./style.css"
import { useDispatch } from 'react-redux';
import { del } from '../../store/Notes/Notes.actions.js';

function NoteCard(props) {
  const dispatch = useDispatch();

  return (
    <section className="card-nota">
      <header className="card-nota_cabecalho">
        <h3 className="card-nota_title">{props.note.title}</h3>
        <button className="card-nota_button" onClick={() => {
          dispatch(del(props.note.uuid));
        }}>X</button>
      </header>
      <p className="card-nota_text">{props.note.text}</p>
    </section>
  );
}

export default NoteCard;