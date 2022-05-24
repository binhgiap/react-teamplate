import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { appRoutes } from './routes';

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
};

function PrivateRoute(props: any) {
  const { isAuthenticated } = props;
  const location = useLocation();
  return isAuthenticated ? <Outlet /> : <Navigate to={`/${appRoutes.AUTH.LOGIN}`} state={{ from: location }} replace />;
}

export default PrivateRoute;
