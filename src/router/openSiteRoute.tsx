import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { appRoutes } from './routes';

OpenSiteRoutes.propTypes = {
  isAuthenticated: PropTypes.bool,
};

function OpenSiteRoutes(props: any) {
  const { isAuthenticated } = props;
  const location = useLocation();
  return isAuthenticated ? <Navigate to={`/${appRoutes.HOME.ROOT}`} state={{ from: location }} replace /> : <Outlet />;
}

export default OpenSiteRoutes;
