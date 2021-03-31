import React, { Component } from "react";
import "./estilo.css";
class CardNota extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_title">{this.props.title}</h3>
        </header>
        <p className="card-nota_text">{this.props.text}</p>
      </section>
    );
  }
}

export default CardNota;
