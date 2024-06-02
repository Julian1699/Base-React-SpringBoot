import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Informacion() {
  return (
    <div className="container" style={{ marginTop: "30px", marginBottom: "30px" }}>
      <div className="card">
        <div className="card-body">
          <div className="text-center">
            <h3>Información sobre la Aplicación</h3>
            <p>
              Esta aplicación, llamada "Sistema de Objetos", es un proyecto de estudio diseñado para demostrar cómo construir una aplicación web completa utilizando tecnologías modernas. La aplicación permite a los usuarios realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) en una entidad abstracta llamada "Objeto".
            </p>
            <h4>Funcionalidades</h4>
            <table className="table">
              <tbody>
                <tr>
                  <td><i className="fas fa-plus-circle"></i> Agregar un nuevo objeto</td>
                </tr>
                <tr>
                  <td><i className="fas fa-list"></i> Listar todos los objetos</td>
                </tr>
                <tr>
                  <td><i className="fas fa-edit"></i> Editar los detalles de un objeto existente</td>
                </tr>
                <tr>
                  <td><i className="fas fa-trash"></i> Eliminar un objeto</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
