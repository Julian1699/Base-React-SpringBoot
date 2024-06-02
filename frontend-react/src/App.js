import React from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navegacion from './components/navbar/Navegacion';
import Bienvenida from './pages/Bienvenida';
import AgregarObjeto from './pages/objeto/AgregarObjeto';
import EditarObjeto from './pages/objeto/EditarObjeto';
import ListadoObjetos from './pages/objeto/ListadoObjetos';
import Informacion from './pages/Informacion';
import Tecnologias from './pages/Tecnologias';

function App() {
  return (
    <Router>
      <Navegacion />
      <Routes>
        <Route path="/" element={<Bienvenida />} />
        <Route path="/agregar" element={<AgregarObjeto />} />
        <Route path="/editar/:id" element={<EditarObjeto />} />
        <Route path="/objetos" element={<ListadoObjetos />} />
        <Route path="/informacion" element={<Informacion />} />
        <Route path="/tecnologias" element={<Tecnologias />} />
      </Routes>
    </Router>
  );
}

export default App;
