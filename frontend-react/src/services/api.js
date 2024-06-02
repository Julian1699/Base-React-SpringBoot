import axios from 'axios';

// Configuración base de Axios
const api = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Funciones para interactuar con la API de objetos
export const getObjetos = async () => {
  try {
    const response = await api.get('/objeto');
    return response.data;
  } catch (error) {
    console.error('Error al obtener objetos', error);
    throw error;
  }
};

export const getObjetoById = async (id) => {
  try {
    const response = await api.get(`/objeto/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener objeto con id ${id}`, error);
    throw error;
  }
};

export const createObjeto = async (objeto) => {
  try {
    const response = await api.post('/objeto', objeto);
    return response.data;
  } catch (error) {
    console.error('Error al crear objeto', error);
    throw error;
  }
};

export const updateObjeto = async (id, objeto) => {
  try {
    const response = await api.put(`/objeto/${id}`, objeto);
    return response.data;
  } catch (error) {
    console.error(`Error al actualizar objeto con id ${id}`, error);
    throw error;
  }
};

export const deleteObjeto = async (id) => {
  try {
    await api.delete(`/objeto/${id}`);
  } catch (error) {
    console.error(`Error al eliminar objeto con id ${id}`, error);
    throw error;
  }
};

export const findByFilters = async (filters) => {
  try {
    const queryParams = new URLSearchParams(filters).toString();
    const response = await api.get(`/objeto/buscar?${queryParams}`);
    return response.data;
  } catch (error) {
    console.error('Error al buscar objetos con filtros', error);
    throw error;
  }
};
