import { useEffect, useState } from 'react';
import MainLayout from '../layout/MainLayout';
import { getCart } from '../services/cart.service';

interface CartItem {
  producto_id: number;
  nombre: string;
  precio: number;
  cantidad: number;
}

const Cart = () => {
  const [items, setItems] = useState<CartItem[]>([]);

  // ⚠️ temporal hasta JWT
  const usuario_id = 1;

  useEffect(() => {
    cargarCarrito();
  }, []);

  const cargarCarrito = async () => {
    try {
      const data = await getCart(usuario_id);
      setItems(data);
    } catch (error) {
      console.error('Error cargando carrito', error);
    }
  };

  return (
    <MainLayout>
      <h2>Carrito</h2>

      {items.length === 0 && <p>No hay productos en el carrito</p>}

      {items.map((item) => (
        <div key={item.producto_id} style={{ marginBottom: 10 }}>
          <strong>{item.nombre}</strong> <br />
          Cantidad: {item.cantidad} <br />
          Precio: S/ {Number(item.precio).toFixed(2)}
        </div>
      ))}
    </MainLayout>
  );
};

export default Cart;
