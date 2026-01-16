import axios from 'axios';

export const confirmarCompra = async (usuario_id: number) => {
  const res = await axios.post('http://localhost:3000/api/checkout', {
    usuario_id
  });
  return res.data;
};
