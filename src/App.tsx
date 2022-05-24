import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import MainLayout from './layout/Main';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import OpenSiteRoutes from './router/openSiteRoute';
import PrivateRoute from './router/privateRoute';
import { ROLE } from './router/role';
import RoleRoute from './router/roleRoute';
import { appRoutes } from './router/routes';
import { useStore } from './store/hooks';

function App() {
  const [state] = useStore();
  const { isAuthenticated } = state;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OpenSiteRoutes />}>
          <Route path={`${appRoutes.AUTH.LOGIN}`} element={<Login />} />
          <Route path={`${appRoutes.AUTH.REGISTER}`} element={<Register />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route element={<MainLayout />}>
            <Route element={<RoleRoute roles={[ROLE.Admin, ROLE.User]} />}>
              <Route index element={<Home />} />
              <Route path={`${appRoutes.HOME.ROOT}`} element={<Home />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
