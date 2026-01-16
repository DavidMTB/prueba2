import type Product from '../types/Product';

interface Props {
  product: Product;
  onAdd: () => void;
}

const ProductCard = ({ product, onAdd }: Props) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: 10 }}>
      <h4>{product.nombre}</h4>
      <p>{product.descripcion}</p>
      <p>S/ {Number(product.precio).toFixed(2)}</p>
      <button onClick={onAdd}>Agregar al carrito</button>
    </div>
  );
};

export default ProductCard;
