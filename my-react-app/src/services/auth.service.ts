const API = 'http://localhost:3000/api/auth';

export const loginService = async (usuario: string, password: string) => {
  const res = await fetch(`${API}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ usuario, password })
  });

  if (!res.ok) throw new Error('Login inválido');
  return res.json();
};

export const registerService = async (usuario: string, password: string) => {
  const res = await fetch(`${API}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ usuario, password })
  });

  if (!res.ok) throw new Error('Registro inválido');
  return res.json();
};
