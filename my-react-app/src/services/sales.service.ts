import axios from 'axios';

const API_URL = 'http://localhost:3000/api/admin/ventas';

export const getVentas = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getDetalleVenta = async (id: number) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
