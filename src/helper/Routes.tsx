import { Route, Routes as ReactRoutes, Navigate } from "react-router-dom";
import { AppRoutes } from "../models/AppRoutes";
import NotFound from "../components/NotFound/Not-found";
import ClientList from "../pages/Clients/ClientList";
import Landing from "../pages/Landing/Landing";
import ClientCreate from "../pages/Clients/ClientCreate";

const Routes: React.FC = () => {
  return (
    <ReactRoutes>
      <Route path={AppRoutes.Landing.home} element={<Landing />} />
      <Route path={AppRoutes.Clients.list} element={<ClientList />} />
      <Route path={AppRoutes.Clients.create} element={<ClientCreate />} />
      <Route path="/" element={<Navigate to={AppRoutes.Landing.home} />} />
      <Route path="*" element={<NotFound />} />
    </ReactRoutes>
  );
};

export default Routes;
