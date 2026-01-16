import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Store from '../pages/Store';
import Cart from '../pages/Cart';
import Login from '../pages/Login';
import Register from '../pages/Register';

import AdminVentas from '../pages/AdminVentas';

import ProtectedRoute from './ProtectedRoute';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLICO */}
        <Route path="/" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ADMIN */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminVentas />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/ventas"
          element={
            <ProtectedRoute>
              <AdminVentas />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
