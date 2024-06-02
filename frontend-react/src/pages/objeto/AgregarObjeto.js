import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createObjeto } from '../../services/api'; // Importa la función createObjeto

export default function AgregarObjeto() {
  let navegacion = useNavigate();

  const [objeto, setObjeto] = useState({
    nombre: "",
    descripcion: "",
    precio: ""
  });

  const { nombre, descripcion, precio } = objeto;

  const onInputChange = (e) => {
    setObjeto({ ...objeto, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await createObjeto(objeto); // Usa la función createObjeto
    navegacion('/objetos');
  };

  return (
    <div className='container' style={{ marginTop: "30px" }}>
      <div className="card">
        <div className="card-body">
          <div className='text-center'>
            <h3>Agregar Objeto</h3>
          </div>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input type="text" className="form-control"
                id="nombre" name='nombre' required={true}
                value={nombre} onChange={(e) => onInputChange(e)} />
            </div>
            <div className="mb-3">
              <label htmlFor="descripcion" className="form-label">Descripción</label>
              <input type="text" className="form-control"
                id="descripcion" name='descripcion'
                value={descripcion} onChange={(e) => onInputChange(e)} />
            </div>
            <div className="mb-3">
              <label htmlFor="precio" className="form-label">Precio</label>
              <input type="number" step="any" className="form-control"
                id="precio" name='precio'
                value={precio} onChange={(e) => onInputChange(e)} />
            </div>
            <div className='text-center'>
              <button type="submit" className="btn btn-success btn-sm me-3">Agregar</button>
              <a href='/objetos' className='btn btn-secondary btn-sm'>Regresar</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
