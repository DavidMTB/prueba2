import type Product from '../types/Product';

interface Props {
  item: {
    producto: Product;
    cantidad: number;
  };
}

const CartItem = ({ item }: Props) => {
  const subtotal = item.producto.precio * item.cantidad;

  return (
    <div style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
      <strong>{item.producto.nombre}</strong>
      <p>{item.producto.descripcion}</p>
      <p>Cantidad: {item.cantidad}</p>
      <p>Precio: S/ {item.producto.precio.toFixed(2)}</p>
      <p><b>Subtotal: S/ {subtotal.toFixed(2)}</b></p>
    </div>
  );
};

export default CartItem;
