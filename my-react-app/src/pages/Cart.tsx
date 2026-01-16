import { useEffect, useState } from 'react';
import { getCart } from '../services/cart.service';
import { auth } from '../auth/auth';
import MainLayout from '../layout/MainLayout';

const Cart = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const data = await getCart();
        setCartItems(data);
      } catch (err) {
        setError('Error al cargar el carrito. ¿Estás autenticado?');
        console.error('Error en getCart:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  if (loading) {
    return <MainLayout><div>Cargando carrito...</div></MainLayout>;
  }

  if (error) {
    return <MainLayout><div style={{ color: 'red' }}>{error}</div></MainLayout>;
  }

  return (
    <MainLayout>
      <h1>Carrito de Compras</h1>
      
      {cartItems.length === 0 ? (
        <div>Tu carrito está vacío</div>
      ) : (
        <>
          <div style={{ marginTop: 20 }}>
            {cartItems.map((item) => (
              <div key={item.id} style={{ 
                padding: '15px', 
                border: '1px solid #ddd', 
                margin: '10px 0',
                borderRadius: '5px'
              }}>
                <h3>{item.nombre}</h3>
                <p>Cantidad: {item.cantidad}</p>
                <p>Precio: ${item.precio}</p>
              </div>
            ))}
          </div>
          
          <button 
            onClick={() => alert('Compra confirmada')}
            style={{ 
              marginTop: 20, 
              padding: '10px 20px', 
              background: '#4CAF50', 
              color: 'white', 
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Confirmar Compra
          </button>
        </>
      )}
    </MainLayout>
  );
};

export default Cart;