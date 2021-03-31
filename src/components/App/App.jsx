import React from "react";
import NoteLists from "../NoteLists";
import RegistrationForm from "../RegistrationForm";
import "../../assets/App.css";
import '../../assets/index.css';

function App() {
  return (
    <section className="content">
      <RegistrationForm />
      <NoteLists />
    </section>
  );
}

export default App;
