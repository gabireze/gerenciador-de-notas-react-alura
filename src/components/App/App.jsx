import React from "react";
import ListaDeNotas from "../ListaDeNotas";
import FormularioCadastro from "../FormularioCadastro";
import "../../assets/App.css";
import '../../assets/index.css';

function App() {

  return (
    <section className="conteudo">
      <FormularioCadastro />
      <ListaDeNotas />
    </section>
  );

}

export default App;
