const API_URL = 'http://localhost:3000/api/auth';

export const registerService = async (usuario: string, password: string) => {
  const res = await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ usuario, password })
  });

  return res.json();
};
