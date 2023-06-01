import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  Categorias,
  Footer,
  NavBar,
  Politicas,
  Productos1,
  Ofertas,
} from './components';
import { ArtesaniasPage, CarritoPage } from './pages';
import { Ingresar } from './components/Ingresar';
import { Registrar } from './components/Registrar';

export const App = () => {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ArtesaniasPage />} />
          <Route path="/carrito" element={<CarritoPage />} />
        </Routes>
      </Router>
      <div className="App">
        {currentForm === 'login' ? (
          <Ingresar onFormSwitch={toggleForm} />
        ) : (
          <Registrar onFormSwitch={toggleForm} />
        )}
      </div>
    </div>
  );
};

export default App;
