const API_URL = 'http://localhost:3000/api/cart';

export const addToCart = async (
  usuario_id: number,
  producto_id: number,
  cantidad: number
) => {
  const res = await fetch(`${API_URL}/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ usuario_id, producto_id, cantidad })
  });

  return res.json();
};

export const getCart = async (usuario_id: number) => {
  const res = await fetch(`${API_URL}/${usuario_id}`);
  return res.json();
};
