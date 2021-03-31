import "./style.css";
import { useDispatch } from 'react-redux';
import { Save } from '../../store/SaveNote/SaveNote.actions'
import { useState } from "react";

function RegistrationForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  function clearNote() {
    setTitle('');
    setText('');
  }

  return (
    <form className="form-cadastro">
      <input
        type="text"
        placeholder="Título"
        className="form-cadastro_input"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <textarea
        rows={15}
        placeholder="Nota"
        className="form-cadastro_input"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button className="form-cadastro_input form-cadastro_submit" onClick={(e) => {
        e.preventDefault();
        dispatch(Save(title, text))
        clearNote();
      }}>
        Criar Nota
      </button>
    </form>
  );
}

export default RegistrationForm;
