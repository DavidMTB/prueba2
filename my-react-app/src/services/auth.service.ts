const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const login = async (email: string, password: string) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.mensaje || 'Error al iniciar sesión');
  }

  return response.json();
};

export const register = async (nombre: string, email: string, password: string) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nombre, email, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.mensaje || 'Error al registrarse');
  }

  return response.json();
};