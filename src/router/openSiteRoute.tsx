import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useStore } from '../store';
import { appRoutes } from './routes';

function OpenSiteRoutes() {
  const [state] = useStore();
  const { isAuthenticated } = state;
  const location = useLocation();
  return isAuthenticated ? <Navigate to={`/${appRoutes.HOME.ROOT}`} state={{ from: location }} replace /> : <Outlet />;
}

export default OpenSiteRoutes;
