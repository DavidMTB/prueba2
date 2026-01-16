import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginService } from '../services/auth.service';
import { auth } from '../auth/auth';

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = await loginService(usuario, password);

    if (data.ok === 1) {
      auth.login({
        id: data.usuario_id,
        usuario: usuario,
        rol: data.usuario === 'admin' ? 'admin' : 'user'
      });

      navigate('/');
    } else {
      alert(data.mensaje);
    }
  };

  return (
    <form onSubmit={login}>
      <h2>Login</h2>

      <input
        placeholder="Usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Ingresar</button>
    </form>
  );
};

export default Login;
