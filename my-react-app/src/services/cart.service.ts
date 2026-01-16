import axios from 'axios';

const API_URL = 'http://localhost:3000/api/cart';

export const addToCart = async (
  usuario_id: number,
  producto_id: number,
  cantidad: number
) => {
  const res = await axios.post(`${API_URL}/add`, {
    usuario_id,
    producto_id,
    cantidad
  });

  return res.data;
};

export const getCart = async (usuario_id: number) => {
  const res = await axios.get(`${API_URL}/${usuario_id}`);
  return res.data;
};
