import "./estilo.css";
import { useDispatch } from 'react-redux';
import { Salvar } from '../../store/SalvarNota/SalvarNota.actions'
import { useState } from "react";

function FormularioCadastro() {

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
        dispatch(Salvar(title, text))
        clearNote();
      }}>
        Criar Nota
      </button>
    </form>
  );
}

export default FormularioCadastro;
