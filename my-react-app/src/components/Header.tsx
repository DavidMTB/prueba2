import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { auth } from '../auth/auth';

interface Props {
  onSearch?: (text: string) => void;
  onCategoria?: (id: number | null) => void;
}

const Header = ({ onSearch, onCategoria }: Props) => {
  const [texto, setTexto] = useState('');
  const navigate = useNavigate();

  const logout = () => {
    auth.logout();
    navigate('/login');
  };

  return (
    <header style={{ padding: 15, background: '#222', color: '#fff' }}>
      <h2>Tienda</h2>

      {onSearch && (
        <input
          placeholder="Buscar producto..."
          value={texto}
          onChange={(e) => {
            setTexto(e.target.value);
            onSearch(e.target.value);
          }}
        />
      )}

      {onCategoria && (
        <select
          onChange={(e) =>
            onCategoria(e.target.value ? Number(e.target.value) : null)
          }
        >
          <option value="">Todas las categorías</option>
          <option value="1">Electrónica</option>
          <option value="2">Ropa</option>
          <option value="3">Hogar</option>
        </select>
      )}

      <nav style={{ marginTop: 10 }}>
        <Link to="/" style={{ marginRight: 10, color: '#fff' }}>
          Tienda
        </Link>

        {auth.isAuthenticated() ? (
          <>
            <Link to="/cart" style={{ marginRight: 10, color: '#fff' }}>
              Carrito
            </Link>

            {auth.getUser()?.rol === 'admin' && (
              <Link to="/admin" style={{ marginRight: 10, color: '#fff' }}>
                Admin
              </Link>
            )}

            <button onClick={logout}>Cerrar sesión</button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ marginRight: 10, color: '#fff' }}>
              Login
            </Link>
            <Link to="/register" style={{ color: '#fff' }}>
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
