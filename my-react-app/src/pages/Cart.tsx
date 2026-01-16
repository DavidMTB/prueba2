import { useEffect, useState } from 'react';
import MainLayout from '../layout/MainLayout';
import { getCart } from '../services/cart.service';
import { confirmarCompra } from '../services/checkout.service';
import { auth } from '../auth/auth';

interface CartItem {
  producto_id: number;
  nombre: string;
  precio: number;
  cantidad: number;
}

const Cart = () => {
  const [items, setItems] = useState<CartItem[]>([]);
  const user = auth.getUser();

  useEffect(() => {
    if (user) {
      cargarCarrito(user.id);
    }
  }, []);

  const cargarCarrito = async (usuarioId: number) => {
    const data = await getCart(usuarioId);
    setItems(data);
  };

  const comprar = async () => {
    if (!user) return;

    await confirmarCompra(); // ✅ SIN pasar user.id
    alert('Compra confirmada');
    setItems([]);
  };

  if (!user) {
    return (
      <MainLayout>
        <p>Debes iniciar sesión para ver el carrito</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <h2>Carrito</h2>

      {items.length === 0 && <p>No hay productos en el carrito</p>}

      {items.map((item) => (
        <div key={item.producto_id}>
          <strong>{item.nombre}</strong><br />
          Cantidad: {item.cantidad}<br />
          Precio: S/ {Number(item.precio).toFixed(2)}
        </div>
      ))}

      {items.length > 0 && (
        <button onClick={comprar}>
          Confirmar compra
        </button>
      )}
    </MainLayout>
  );
};

export default Cart;
