import axios from 'axios';

const API_URL = 'http://localhost:3000/api/checkout';

export const confirmarCompra = async () => {
  const response = await axios.post(`${API_URL}/confirmar`);
  return response.data;
};
