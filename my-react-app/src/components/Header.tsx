import { Link } from 'react-router-dom';
import { auth } from '../auth/auth';
import { useEffect, useState } from 'react';

const Header = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Cargar usuario desde localStorage al montar el componente
    const loadUser = () => {
      const currentUser = auth.getUser();
      setUser(currentUser);
      setLoading(false);
    };
    
    loadUser();
    
    // Escuchar cambios en el almacenamiento (para cuando se inicia/cierra sesión en otra pestaña)
    const handleStorageChange = () => {
      setUser(auth.getUser());
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleLogout = () => {
    auth.logout();
    setUser(null);
  };

  if (loading) {
    return <header style={{ padding: 15, background: '#222', color: '#fff' }}>Cargando...</header>;
  }

  return (
    <header style={{ 
      padding: '15px 20px', 
      background: '#222', 
      color: '#fff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>
          Tienda Online
        </Link>
      </div>
      
      <div>
        {!user && (
          <>
            <Link to="/login" style={{ marginLeft: 15, color: '#fff', textDecoration: 'none' }}>
              Iniciar Sesión
            </Link>
            <Link to="/register" style={{ marginLeft: 15, color: '#fff', textDecoration: 'none' }}>
              Registrarse
            </Link>
          </>
        )}

        {user && (
          <>
            {user.rol === 'admin' && (
              <Link to="/admin" style={{ marginLeft: 15, color: '#fff', textDecoration: 'none' }}>
                Panel Admin
              </Link>
            )}
            <Link to="/cart" style={{ marginLeft: 15, color: '#fff', textDecoration: 'none' }}>
              Carrito
            </Link>
            <button 
              onClick={handleLogout} 
              style={{ 
                marginLeft: 15, 
                background: 'transparent',
                border: 'none',
                color: '#fff',
                cursor: 'pointer'
              }}
            >
              Cerrar Sesión
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;