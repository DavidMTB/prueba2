import { useState } from 'react';
import { registerService } from '../services/auth.service';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submit = async () => {
    try {
      await registerService(usuario, password);
      alert('Registro exitoso, ahora inicia sesión');
      navigate('/login');
    } catch (error) {
      alert('Error al registrar usuario');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Registro</h2>

      <input
        placeholder="Usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />

      <br />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />

      <button onClick={submit}>Registrarse</button>
    </div>
  );
};

export default Register;
