import { Route, Routes as ReactRoutes, Navigate } from "react-router-dom";
import { AppRoutes } from "../models/AppRoutes";
import NotFound from "../components/NotFound/Not-found";
import ClientList from "../pages/Clients/ClientList";
import Landing from "../pages/Landing/Landing";
import ClientCreate from "../pages/Clients/ClientCreate";
import ClassesForm from "../pages/Classes/ClassesForm";
import ClassesList from "../pages/Classes/ClassesList";
import ClientDetails from "../pages/Clients/ClientDetails";

const Routes: React.FC = () => {
  return (
    <ReactRoutes>
      <Route path={AppRoutes.Landing.home} element={<Landing />} />
      <Route path={AppRoutes.Clients.list} element={<ClientList />} />
      <Route path={AppRoutes.Clients.create} element={<ClientCreate />} />
      <Route path={AppRoutes.Clients.edit} element={<ClientCreate />} />
      <Route path={AppRoutes.Clients.details} element={<ClientDetails />} />
      <Route path={AppRoutes.Classes.list} element={<ClassesList />} />
      <Route path={AppRoutes.Classes.create} element={<ClassesForm />} />
      <Route path={AppRoutes.Classes.edit} element={<ClassesForm />} />
      <Route path="/" element={<Navigate to={AppRoutes.Landing.home} />} />
      <Route path="*" element={<NotFound />} />
    </ReactRoutes>
  );
};

export default Routes;
