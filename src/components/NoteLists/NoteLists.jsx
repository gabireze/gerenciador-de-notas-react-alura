import React from "react";
import NoteCard from "../NoteCard";
import "./style.css";
import { useSelector } from "react-redux";



function NoteLists() {
  const result = useSelector(state => state.notes);

  function _noteGenerator(result) {
    return (
      result.notes.map(
        (note, index) => {
          return (<li className="lista-notas_item" key={index}>
            <NoteCard note={note} />
          </li>)
        })
    );
  }

  return (<ul className="lista-notas">
    {_noteGenerator(result)}
  </ul >
  );
}

export default NoteLists;
