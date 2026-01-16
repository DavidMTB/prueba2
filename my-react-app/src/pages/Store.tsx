import { useEffect, useState } from 'react';
import MainLayout from '../layout/MainLayout';
import ProductCard from '../components/ProductCard';
import type Product from '../types/Product';
import { getProducts } from '../services/product.service';
import { addToCart } from '../services/cart.service';
import { auth } from '../auth/auth';

const Store = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    cargarProductos();
  }, [page]);

  const cargarProductos = async () => {
    const data = await getProducts(page);
    setProducts(data);
  };

  const agregarAlCarrito = async (productoId: number) => {
    if (!auth.isAuthenticated()) {
      alert('Debes iniciar sesión para agregar productos al carrito');
      return;
    }

    const user = auth.getUser();
    if (!user) return;

    await addToCart(user.id, productoId, 1);
    alert('Producto agregado al carrito');
  };

  return (
    <MainLayout>
      <h2>Tienda</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 15 }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAdd={() => agregarAlCarrito(product.id)}
          />
        ))}
      </div>

      <div style={{ marginTop: 20, display: 'flex', gap: 10 }}>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Anterior
        </button>
        <span>Página {page}</span>
        <button onClick={() => setPage(page + 1)}>
          Siguiente
        </button>
      </div>
    </MainLayout>
  );
};

export default Store;
