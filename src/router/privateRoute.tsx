import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useStore } from '../store';
import { appRoutes } from './routes';

function PrivateRoute() {
  const [state] = useStore();
  const { isAuthenticated } = state;

  const location = useLocation();
  return isAuthenticated ? <Outlet /> : <Navigate to={`/${appRoutes.AUTH.LOGIN}`} state={{ from: location }} replace />;
}

export default PrivateRoute;
