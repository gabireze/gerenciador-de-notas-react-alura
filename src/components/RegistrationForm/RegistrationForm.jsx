import "./style.css";
import { useDispatch } from 'react-redux';
import { save } from '../../store/Notes/Notes.actions';
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from "react-redux";

function RegistrationForm() {
  const _dispatch = useDispatch();
  const [title, _setTitle] = useState("");
  const [text, _setText] = useState("");
  const _result = useSelector(state => state.notes);

  function _hasTitleOrText(title, text) {
    return title || text;
  }

  function _isNotDuplicated(title, text) {
    if (_result.notes.find(note => note.title === title && note.text === text)) {
      window.alert('Nota já criada');
      return false;
    } else {
      return true;
    }
  }

  function _clearNote() {
    _setTitle('');
    _setText('');
  }

  return (
    <form className="form-cadastro">
      <input
        type="text"
        placeholder="Título"
        className="form-cadastro_input"
        value={title}
        onChange={(e) => {
          _setTitle(e.target.value);
        }}
      />
      <textarea
        rows={15}
        placeholder="Nota"
        className="form-cadastro_input"
        value={text}
        onChange={(e) => {
          _setText(e.target.value);
        }}
      />
      <button className="form-cadastro_input form-cadastro_submit" onClick={(e) => {
        e.preventDefault();
        if (_hasTitleOrText(title, text) && _isNotDuplicated(title, text)) {
          const note = {
            title,
            text,
            uuid: uuidv4(),
          };
          _dispatch(save(note));
        }
        _clearNote();
      }}>
        Criar Nota
      </button>
    </form>
  );
}

export default RegistrationForm;
