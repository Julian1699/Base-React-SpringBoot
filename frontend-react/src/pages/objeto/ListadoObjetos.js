import React, { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';
import { getObjetos, deleteObjeto, findByFilters } from '../../services/api';

export default function ListadoObjetos() {
  const [objetos, setObjetos] = useState([]);
  const [filtros, setFiltros] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    fechaCreacion: ""
  });

  useEffect(() => {
    cargarObjetos();
  }, []);

  const cargarObjetos = async () => {
    try {
      const data = await getObjetos();
      setObjetos(data);
    } catch (error) {
      console.error('Error al cargar objetos', error);
    }
  };

  const buscarObjetos = async (e) => {
    e.preventDefault();
    try {
      const data = await findByFilters(filtros);
      setObjetos(data);
    } catch (error) {
      console.error('Error al buscar objetos', error);
    }
  };

  const eliminarObjeto = async (id) => {
    try {
      await deleteObjeto(id);
      cargarObjetos();
    } catch (error) {
      console.error('Error al eliminar objeto', error);
    }
  };

  const onFiltroChange = (e) => {
    setFiltros({ ...filtros, [e.target.name]: e.target.value });
  };

  return (
    <div className="container" style={{ marginTop: "30px" }}>
      <div className="card">
        <div className="card-body">
          <div className="text-center">
            <h3>Sistema de Objetos</h3>
          </div>
          <form onSubmit={buscarObjetos}>
            <div className="row mb-3">
              <div className="col">
                <input type="text" className="form-control" placeholder="Nombre" name="nombre" value={filtros.nombre} onChange={onFiltroChange} />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="Descripción" name="descripcion" value={filtros.descripcion} onChange={onFiltroChange} />
              </div>
              <div className="col">
                <input type="number" className="form-control" placeholder="Precio" name="precio" value={filtros.precio} onChange={onFiltroChange} />
              </div>
              <div className="col">
                <input type="datetime-local" className="form-control" placeholder="Fecha de Creación" name="fechaCreacion" value={filtros.fechaCreacion} onChange={onFiltroChange} />
              </div>
              <div className="col">
                <button type="submit" className="btn btn-primary">Buscar</button>
              </div>
            </div>
          </form>

          <table className="table table-striped table-hover align-middle">
            <thead className='table-dark'>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Descripción</th>
                <th scope="col">Precio</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                objetos.map((objeto, indice) => (
                  <tr key={indice}>
                    <th scope="row">{objeto.id}</th>
                    <td>{objeto.nombre}</td>
                    <td>{objeto.descripcion}</td>
                    <td>
                      <NumericFormat value={objeto.precio}
                        displayType={'text'}
                        thousandSeparator=',' prefix={'$'}
                        decimalScale={2} fixedDecimalScale />
                    </td>
                    <td className='text-center'>
                      <div>
                        <Link to={`/editar/${objeto.id}`}
                          className='btn btn-warning btn-sm me-3'>Editar</Link>
                        <button
                          onClick={() => eliminarObjeto(objeto.id)}
                          className='btn btn-danger btn-sm'
                        >Eliminar</button>
                      </div>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
