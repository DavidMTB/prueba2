const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/cart';
import { auth } from '../auth/auth';

const getAuthHeaders = () => {
  const token = auth.getToken();
  return {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` })
  };
};

export const addToCart = async (producto_id: number, cantidad: number) => {
  const res = await fetch(`${API_URL}/add`, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify({ producto_id, cantidad })
  });
  
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.mensaje || 'Error al agregar al carrito');
  }
  return res.json();
};

export const getCart = async () => {
  const res = await fetch(`${API_URL}/current`, {
    headers: getAuthHeaders()
  });
  
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.mensaje || 'Error al obtener carrito');
  }
  return res.json();
};