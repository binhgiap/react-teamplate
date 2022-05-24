import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import AccessDenied from '../pages/AccessDenied';

RoleRoute.propTypes = {
  roles: PropTypes.array,
};

function RoleRoute(props: any) {
  const { roles } = props;
  const user = { role: 'Admin' };

  const userHasRequiredRole = user && roles.includes(user.role) ? true : false;

  if (userHasRequiredRole) {
    return <Outlet />;
  }

  if (!userHasRequiredRole) {
    return <AccessDenied />;
  }

  return <AccessDenied />;
}

export default RoleRoute;
