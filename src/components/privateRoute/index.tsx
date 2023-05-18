import React from 'react';
import { Route, Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  element: React.ReactNode;
  path: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, path }) => {
  const isAuthenticated = true; // Verifica l'autenticazione dell'utente come preferisci

  return (
    <Route
      path={path}
      element={isAuthenticated ? element : <Navigate to="/login" replace={true} />}
    />
  );
};

export default PrivateRoute;
