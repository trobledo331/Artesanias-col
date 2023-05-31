import React, { useState } from "react";
import './App.css';
import { Ingresar } from './components/Ingresar';
import { Registrar } from './components/Registrar';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Ingresar onFormSwitch={toggleForm} /> : <Registrar onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;
