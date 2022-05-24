import { Outlet } from 'react-router-dom';
import HeaderLayout from '../Header';
import './style.scss';

MainLayout.propTypes = {};

function MainLayout() {
  return (
    <div className="main">
      <HeaderLayout />
      <div className="main__content">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
