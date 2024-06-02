import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getObjetoById, updateObjeto } from '../../services/api';

export default function EditarObjeto() {
  let navegacion = useNavigate();
  const { id } = useParams();

  const [objeto, setObjeto] = useState({
    nombre: "",
    descripcion: "",
    precio: ""
  });

  const { nombre, descripcion, precio } = objeto;

  const cargarObjeto = useCallback(async () => {
    const resultado = await getObjetoById(id);
    setObjeto(resultado);
  }, [id]);

  useEffect(() => {
    cargarObjeto();
  }, [cargarObjeto]);

  const onInputChange = (e) => {
    setObjeto({ ...objeto, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await updateObjeto(id, objeto);
    navegacion('/objetos');
  };

  return (
    <div className='container' style={{ marginTop: "30px" }}>
      <div className="card">
        <div className="card-body">
          <div className='text-center'>
            <h3>Editar Objeto</h3>
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
              <button type="submit" className="btn btn-success btn-sm me-3">Guardar</button>
              <a href='/objetos' className='btn btn-secondary btn-sm'>Regresar</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
