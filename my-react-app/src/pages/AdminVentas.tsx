import { useEffect, useState } from 'react';
import MainLayout from '../layout/MainLayout';
import { getVentas } from '../services/sales.service';

interface Venta {
  venta_id: number;
  usuario_id: number;
  fecha: string;
  total: number;
}

const AdminVentas = () => {
  const [ventas, setVentas] = useState<Venta[]>([]);

  useEffect(() => {
    cargar();
  }, []);

  const cargar = async () => {
    const data = await getVentas();
    setVentas(data);
  };

  return (
    <MainLayout>
      <h2>Historial de Ventas</h2>

      <table border={1} cellPadding={5}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Usuario</th>
            <th>Fecha</th>
            <th>Total (S/)</th>
          </tr>
        </thead>
        <tbody>
          {ventas.map((v) => (
            <tr key={v.venta_id}>
              <td>{v.venta_id}</td>
              <td>{v.usuario_id}</td>
              <td>{new Date(v.fecha).toLocaleString()}</td>
              <td>{Number(v.total).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </MainLayout>
  );
};

export default AdminVentas;
