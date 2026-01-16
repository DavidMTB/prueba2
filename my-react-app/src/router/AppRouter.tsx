import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login as loginService } from '../services/auth.service';
import { auth } from '../auth/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await loginService(email, password);
      
      // Guardar token y usuario en auth.ts
      auth.login(response.token, response.user);
      
      // Redirigir según rol
      if (response.user.rol === 'admin') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } catch (err) {
      setError('Credenciales incorrectas. Inténtalo de nuevo.');
      console.error('Error en login:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      maxWidth: '400px', 
      margin: '50px auto', 
      padding: '30px', 
      border: '1px solid #ddd', 
      borderRadius: '8px'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Iniciar Sesión</h2>
      
      {error && (
        <div style={{ 
          background: '#ffebee', 
          color: '#c62828', 
          padding: '10px', 
          borderRadius: '4px', 
          marginBottom: '20px' 
        }}>
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Correo electrónico:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ 
              width: '100%', 
              padding: '10px', 
              border: '1px solid #ddd', 
              borderRadius: '4px' 
            }}
          />
        </div>
        
        <div style={{ marginBottom: '25px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Contraseña:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ 
              width: '100%', 
              padding: '10px', 
              border: '1px solid #ddd', 
              borderRadius: '4px' 
            }}
          />
        </div>
        
        <button
          type="submit"
          disabled={loading}
          style={{ 
            width: '100%', 
            padding: '12px', 
            background: '#2196F3', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: loading ? 'not-allowed' : 'pointer',
            fontSize: '16px'
          }}
        >
          {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
        </button>
      </form>
      
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <p>¿No tienes cuenta? <a href="/register" style={{ color: '#2196F3' }}>Regístrate</a></p>
      </div>
    </div>
  );
};

export default Login;