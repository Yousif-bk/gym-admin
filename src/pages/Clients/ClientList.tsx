import { useEffect, useState } from "react";
import api from "../../helper/axios/Api";
import Client from "../../models/Client";
import ClientTable from "../../components/Clients/ClientsTable";
import { ClientFields } from "../../models/ClientFields";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../models/AppRoutes";
import { ApiRoutes } from "../../models/ApiRoutes";

function ClientList() {
  const [clients, setClients] = useState<Client[]>([]);
  const [isloading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await api.get(ApiRoutes.Clients.fetch);
        setClients(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddClickt = () => navigate(AppRoutes.Clients.create);

  return (
    <>
      <div className="content container-fluid">
        <div className="tabel-header py-3">
          <div className="d-grid d-sm-flex gap-2">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleAddClickt}
            >
              Add Client
            </button>
          </div>
        </div>
        <ClientTable
          clients={clients}
          isloading={isloading}
        />
      </div>
    </>
  );
}

export default ClientList;
