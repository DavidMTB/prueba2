import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar de navegación */}
      <div style={{ 
        width: '250px', 
        background: '#2c3e50', 
        color: 'white',
        padding: '20px 0',
        boxShadow: '2px 0 5px rgba(0,0,0,0.1)'
      }}>
        <div style={{ padding: '0 20px', marginBottom: '30px' }}>
          <h2 style={{ color: '#fff', margin: 0, fontSize: '1.5rem' }}>Panel Administrador</h2>
        </div>
        
        <nav>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li>
              <Link 
                to="/admin"
                style={{ 
                  display: 'block', 
                  padding: '12px 20px', 
                  color: '#fff', 
                  textDecoration: 'none',
                  fontSize: '1rem'
                }}
                onClick={() => window.scrollTo(0, 0)}
              >
                📊 Ventas
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/dashboard"
                style={{ 
                  display: 'block', 
                  padding: '12px 20px', 
                  color: '#fff', 
                  textDecoration: 'none',
                  fontSize: '1rem'
                }}
                onClick={() => window.scrollTo(0, 0)}
              >
                📈 Dashboard
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/productos"
                style={{ 
                  display: 'block', 
                  padding: '12px 20px', 
                  color: '#fff', 
                  textDecoration: 'none',
                  fontSize: '1rem'
                }}
                onClick={() => window.scrollTo(0, 0)}
              >
                📦 Productos
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/usuarios"
                style={{ 
                  display: 'block', 
                  padding: '12px 20px', 
                  color: '#fff', 
                  textDecoration: 'none',
                  fontSize: '1rem'
                }}
                onClick={() => window.scrollTo(0, 0)}
              >
                👥 Usuarios
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Contenido principal */}
      <div style={{ 
        flex: 1, 
        padding: '25px',
        background: '#f5f7fa',
        overflowY: 'auto'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          background: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
          padding: '25px'
        }}>
          <Outlet /> {/* Aquí se renderizan AdminVentas, Dashboard, etc. */}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;