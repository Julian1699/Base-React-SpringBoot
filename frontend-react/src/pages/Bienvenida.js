import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

export default function Bienvenida() {
  return (
    <div className="container" style={{ marginTop: "30px" }}>
      <div className="card">
        <div className="card-body text-center">
          <h3>Bienvenido al Sistema de Objetos</h3>
          <ul className="list-unstyled">
            <li className="mb-2">
              <p>• Este es un proyecto abstracto diseñado para el estudio y la guía del aprendizaje.</p>
            </li>
            <li className="mb-2">
              <p>• El propósito de este proyecto es demostrar cómo se puede construir una aplicación web completa utilizando React para el frontend y Spring Boot para el backend.</p>
            </li>
            <li className="mb-2">
              <p>• Para más detalles sobre las funcionalidades de la aplicación y cómo utilizarla, por favor, consulta la página de información.</p>
            </li>
          </ul>
          <Link to="/informacion" className="btn btn-primary">Más Información</Link>
        </div>
      </div>
    </div>
  );
}

