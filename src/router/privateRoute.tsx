import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { appRoutes } from './routes';
import { useStore } from '../store';

function PrivateRoute() {
  const [state] = useStore();
  const { isAuthenticated } = state;

  const location = useLocation();
  return isAuthenticated ? <Outlet /> : <Navigate to={`/${appRoutes.AUTH.LOGIN}`} state={{ from: location }} replace />;
}

export default PrivateRoute;
