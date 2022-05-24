import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { appRoutes } from './routes';
import { useStore } from '../store';

function OpenSiteRoutes() {
  const [state] = useStore();
  const { isAuthenticated } = state;
  const location = useLocation();
  return isAuthenticated ? <Navigate to={`/${appRoutes.HOME.ROOT}`} state={{ from: location }} replace /> : <Outlet />;
}

export default OpenSiteRoutes;
