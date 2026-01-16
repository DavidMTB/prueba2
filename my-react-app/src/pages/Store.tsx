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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    cargarProductos();
  }, [page]);

  const cargarProductos = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getProducts(page);
      setProducts(data);
    } catch (err) {
      setError('Error al cargar productos. Verifica tu conexión.');
      console.error('Error en getProducts:', err);
    } finally {
      setLoading(false);
    }
  };

  const agregarAlCarrito = async (productoId: number) => {
    if (!auth.isAuthenticated()) {
      alert('Debes iniciar sesión para agregar productos al carrito');
      return;
    }

    try {
      await addToCart(productoId, 1);
      alert('Producto agregado al carrito exitosamente');
    } catch (err) {
      alert((err as Error).message);
    }
  };

  return (
    <MainLayout>
      <h1>Tienda</h1>
      
      {error && <div style={{ color: 'red', margin: '10px 0' }}>{error}</div>}
      {loading && <div>Cargando productos...</div>}
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 15, marginTop: 20 }}>
        {products.length === 0 && !loading && !error && (
          <div>No hay productos disponibles en este momento</div>
        )}
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAdd={agregarAlCarrito}
          />
        ))}
      </div>

      <div style={{ marginTop: 20, textAlign: 'center' }}>
        <button 
          disabled={page === 1 || loading} 
          onClick={() => setPage(prev => prev - 1)}
          style={{ padding: '8px 16px', margin: '0 5px' }}
        >
          Anterior
        </button>
        <span style={{ margin: '0 15px', fontWeight: 'bold' }}>Página {page}</span>
        <button 
          disabled={loading} 
          onClick={() => setPage(prev => prev + 1)}
          style={{ padding: '8px 16px', margin: '0 5px' }}
        >
          Siguiente
        </button>
      </div>
    </MainLayout>
  );
};

export default Store;