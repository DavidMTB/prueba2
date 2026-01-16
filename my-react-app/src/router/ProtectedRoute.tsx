import { Navigate } from 'react-router-dom';
import type { ReactNode } from 'react';
import { auth } from '../auth/auth';

interface Props {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  if (!auth.isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
