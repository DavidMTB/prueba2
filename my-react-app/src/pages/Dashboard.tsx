import { useNavigate } from 'react-router-dom';
import { auth } from '../auth/auth';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate('/login');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Dashboard</h1>
      <p>Bienvenido, sesión activa.</p>

      <button onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default Dashboard;
