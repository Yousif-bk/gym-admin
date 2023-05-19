import { useState } from "react";
import ClientTable from "../../components/Clients/ClientsTable";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../models/AppRoutes";

function ClientList() {
  const navigate = useNavigate();



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
        <ClientTable/>
      </div>
    </>
  );
}

export default ClientList;
