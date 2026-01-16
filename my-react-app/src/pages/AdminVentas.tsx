import { useState, useEffect } from 'react';

const AdminVentas = () => {
  const [ventas, setVentas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVentas = async () => {
      try {
        // Aquí iría tu llamada a la API para obtener ventas
        // Por ahora, datos simulados
        const data = [
          { id: 1, fecha: '2024-01-15', total: 125.50, cliente: 'Juan Pérez' },
          { id: 2, fecha: '2024-01-16', total: 89.99, cliente: 'María López' },
          { id: 3, fecha: '2024-01-17', total: 210.00, cliente: 'Carlos Sánchez' }
        ];
        setVentas(data);
      } catch (err) {
        setError('Error al cargar las ventas');
        console.error('Error en API de ventas:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchVentas();
  }, []);

  return (
    <div>
      <h1 style={{ 
        fontSize: '1.8rem', 
        color: '#333', 
        marginBottom: '25px',
        borderBottom: '2px solid #eee',
        paddingBottom: '10px'
      }}>
        Gestión de Ventas
      </h1>
      
      {loading ? (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          Cargando ventas...
        </div>
      ) : error ? (
        <div style={{ color: 'red', padding: '15px', background: '#ffebee', borderRadius: '4px' }}>
          {error}
        </div>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table style={{ 
            width: '100%', 
            borderCollapse: 'collapse',
            minWidth: '600px'
          }}>
            <thead>
              <tr style={{ background: '#2c3e50', color: 'white' }}>
                <th style={{ padding: '12px', textAlign: 'left', width: '10%' }}>ID</th>
                <th style={{ padding: '12px', textAlign: 'left', width: '25%' }}>Fecha</th>
                <th style={{ padding: '12px', textAlign: 'left', width: '30%' }}>Cliente</th>
                <th style={{ padding: '12px', textAlign: 'right', width: '20%' }}>Total</th>
                <th style={{ padding: '12px', textAlign: 'center', width: '15%' }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {ventas.map((venta) => (
                <tr 
                  key={venta.id} 
                  style={{ 
                    borderBottom: '1px solid #eee',
                    transition: 'background 0.2s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.background = '#f9f9f9'}
                  onMouseOut={(e) => e.currentTarget.style.background = ''}
                >
                  <td style={{ padding: '12px' }}>{venta.id}</td>
                  <td style={{ padding: '12px' }}>{venta.fecha}</td>
                  <td style={{ padding: '12px' }}>{venta.cliente}</td>
                  <td style={{ padding: '12px', textAlign: 'right' }}>${venta.total.toFixed(2)}</td>
                  <td style={{ padding: '12px', textAlign: 'center' }}>
                    <button 
                      style={{ 
                        background: '#3498db', 
                        color: 'white', 
                        border: 'none',
                        padding: '5px 10px',
                        borderRadius: '4px',
                        cursor: 'pointer'
                      }}
                    >
                      Ver
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminVentas;