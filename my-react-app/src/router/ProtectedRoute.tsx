import { Navigate } from 'react-router-dom';
import type { ReactNode } from 'react';
import { auth } from '../auth/auth';
import { useEffect, useState } from 'react';

interface Props {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verificar autenticación al cargar el componente
    const checkAuth = () => {
      setIsAuthenticated(auth.isAuthenticated());
      setIsLoading(false);
    };
    
    checkAuth();
  }, []);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;