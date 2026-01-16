import { useState, useEffect } from 'react';

const Dashboard = () => {
  const [salesData, setSalesData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Aquí iría la llamada a tu API para obtener datos reales
    // Por ahora, datos simulados
    setTimeout(() => {
      const data = [
        { id: 1, date: '2024-01-15', total: 125.50, products: 3 },
        { id: 2, date: '2024-01-16', total: 89.99, products: 2 },
        { id: 3, date: '2024-01-17', total: 210.00, products: 5 },
        { id: 4, date: '2024-01-18', total: 75.25, products: 1 },
        { id: 5, date: '2024-01-19', total: 150.75, products: 4 }
      ];
      setSalesData(data);
      setLoading(false);
    }, 800);
  }, []);

  const exportToExcel = () => {
    alert('Función para exportar a Excel\n(Aquí iría la integración con exceljs)');
  };

  const exportToPdf = () => {
    alert('Función para exportar a PDF\n(Aquí iría la integración con pdfmake)');
  };

  const totalSales = salesData.reduce((sum, sale) => sum + sale.total, 0);
  const totalProducts = salesData.reduce((sum, sale) => sum + sale.products, 0);

  return (
    <div>
      <h1 style={{ 
        fontSize: '1.8rem', 
        color: '#333', 
        marginBottom: '25px',
        borderBottom: '2px solid #eee',
        paddingBottom: '10px'
      }}>
        Dashboard de Ventas
      </h1>
      
      {/* Botones de exportación */}
      <div style={{ 
        display: 'flex', 
        gap: '12px', 
        margin: '20px 0 25px',
        flexWrap: 'wrap'
      }}>
        <button 
          onClick={exportToExcel}
          style={{ 
            padding: '10px 20px', 
            background: '#2196F3', 
            color: 'white', 
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <span>📥</span> Exportar a Excel
        </button>
        <button 
          onClick={exportToPdf}
          style={{ 
            padding: '10px 20px', 
            background: '#f44336', 
            color: 'white', 
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <span>📄</span> Exportar a PDF
        </button>
      </div>
      
      {/* Tarjetas de resumen */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
        gap: '20px',
        marginBottom: '30px'
      }}>
        <div style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '25px',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ margin: 0, fontSize: '1.1rem', opacity: 0.9 }}>Total Ventas</h3>
          <p style={{ fontSize: '2.2rem', fontWeight: 'bold', margin: '10px 0 0' }}>
            ${totalSales.toFixed(2)}
          </p>
          <p style={{ margin: '8px 0 0', fontSize: '0.9rem', opacity: 0.9 }}>
            {salesData.length} ventas registradas
          </p>
        </div>
        
        <div style={{ 
          background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
          color: 'white',
          padding: '25px',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ margin: 0, fontSize: '1.1rem', opacity: 0.9 }}>Productos Vendidos</h3>
          <p style={{ fontSize: '2.2rem', fontWeight: 'bold', margin: '10px 0 0' }}>
            {totalProducts}
          </p>
          <p style={{ margin: '8px 0 0', fontSize: '0.9rem', opacity: 0.9 }}>
            Promedio: {(totalProducts / Math.max(salesData.length, 1)).toFixed(1)} por venta
          </p>
        </div>
        
        <div style={{ 
          background: 'linear-gradient(135deg, #ee9ca7 0%, #ffdde1 100%)',
          color: '#333',
          padding: '25px',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ margin: 0, fontSize: '1.1rem', opacity: 0.9 }}>Última Venta</h3>
          <p style={{ fontSize: '2.2rem', fontWeight: 'bold', margin: '10px 0 0' }}>
            ${salesData.length > 0 ? salesData[salesData.length - 1].total.toFixed(2) : '0.00'}
          </p>
          <p style={{ margin: '8px 0 0', fontSize: '0.9rem', opacity: 0.9 }}>
            {salesData.length > 0 ? salesData[salesData.length - 1].date : 'Sin datos'}
          </p>
        </div>
      </div>
      
      {/* Tabla de ventas recientes */}
      <div style={{ 
        background: 'white', 
        borderRadius: '10px', 
        boxShadow: '0 2px 15px rgba(0,0,0,0.08)',
        padding: '20px',
        marginTop: '20px'
      }}>
        <h2 style={{ 
          fontSize: '1.4rem', 
          color: '#333', 
          marginBottom: '15px',
          paddingBottom: '10px',
          borderBottom: '1px solid #eee'
        }}>
          Ventas Recientes
        </h2>
        
        {loading ? (
          <div style={{ textAlign: 'center', padding: '20px' }}>
            Cargando datos...
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
                <tr style={{ background: '#f8f9fa' }}>
                  <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Fecha</th>
                  <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>ID Venta</th>
                  <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Productos</th>
                  <th style={{ padding: '12px', textAlign: 'right', fontWeight: '600' }}>Total</th>
                </tr>
              </thead>
              <tbody>
                {salesData.slice(0, 5).map((sale) => (
                  <tr 
                    key={sale.id} 
                    style={{ 
                      borderBottom: '1px solid #eee',
                      transition: 'background 0.2s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.background = '#f9f9f9'}
                    onMouseOut={(e) => e.currentTarget.style.background = ''}
                  >
                    <td style={{ padding: '12px' }}>{sale.date}</td>
                    <td style={{ padding: '12px' }}>#{sale.id}</td>
                    <td style={{ padding: '12px' }}>{sale.products} productos</td>
                    <td style={{ padding: '12px', textAlign: 'right', fontWeight: '600' }}>
                      ${sale.total.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;