import React from "react";
import NoteCard from "../NoteCard";
import "./style.css";
import { useSelector } from "react-redux";

function noteGenerator(result) {
  return (
    result.map(
      (result, index) => {
        return (<li className="lista-notas_item" key={index}>
          <NoteCard title={result.title} text={result.text} />
        </li>)
      })
  );
}

function NoteLists() {
  const result = useSelector(state => state.saveNote);

  return (<ul className="lista-notas">
    {noteGenerator(result)}
  </ul >
  );
}

export default NoteLists;
