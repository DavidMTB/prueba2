import { Link } from 'react-router-dom';
import { auth } from '../auth/auth';

const Header = () => {
  const user = auth.getUser();

  return (
    <header style={{ padding: 15, background: '#222', color: '#fff' }}>
      <Link to="/">Tienda</Link>

      {!user && (
        <>
          <Link to="/login" style={{ marginLeft: 10 }}>Login</Link>
          <Link to="/register" style={{ marginLeft: 10 }}>Register</Link>
        </>
      )}

      {user && (
        <>
          <Link to="/cart" style={{ marginLeft: 10 }}>Carrito</Link>
          {user.rol === 'admin' && (
            <Link to="/admin" style={{ marginLeft: 10 }}>Admin</Link>
          )}
          <button onClick={() => auth.logout()} style={{ marginLeft: 10 }}>
            Salir
          </button>
        </>
      )}
    </header>
  );
};

export default Header;
