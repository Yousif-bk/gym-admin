import React from "react";
import Client from "../../models/Client";
import api from "../../helper/axios/Api";
import { useNavigate } from "react-router-dom";

interface ClientTableProps {
  clients: Client[];
  isloading: boolean;
}

const ClientTable: React.FC<ClientTableProps> = ({ clients, isloading }) => {
  const navigate = useNavigate();
  const handleDelete = async (clientsId: string) => {
    try {
      await api.delete(`/clients/${clientsId}`);
    } catch (error) {
      console.error("Error deleting class:", error);
    }
  };
  const handleUpdate = (clientsId: string) => navigate(`/clients/${clientsId}`);
  const handleDetails = (clientsId: string) =>
    navigate(`/client/details/${clientsId}`);

  return (
    <table className="table w-100 mb-4 main-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Avatar</th>
          <th>Full Name</th>
          <th>Address</th>
          <th>Subscription Plan</th>
          <th>Mobile Number</th>
          <th>Created At</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {isloading && (
          <tr>
            <td colSpan={7} className="text-center">
              <div className="spinner-grow" role="status"></div>
            </td>
          </tr>
        )}
        {clients.map((client) => (
          <tr key={client.id}>
            <td>
              <div className="table_cell">{client.id}</div>
            </td>
            <td>
              <div className="table_cell">
                {typeof client.avatar === "object" ? "" : client.avatar}
              </div>
            </td>
            <td>
              <div
                className="table_cell clickable text-primary"
                onClick={() => handleDetails(client.id)}
              >
                {client.full_name}
              </div>
            </td>
            <td>
              <div className="table_cell">{client.address}</div>
            </td>
            <td>
              <div className="table_cell">{client.subscription_plan}</div>
            </td>
            <td>
              <div className="table_cell">{client.mobile_number}</div>
            </td>
            <td>
              <div className="table_cell">{client.createdAt}</div>
            </td>
            <td>
              <i
                className="bi bi-trash p-3 clickable"
                onClick={() => handleDelete(client.id)}
              />
              <i
                className="bi bi-pen clickable"
                onClick={() => handleUpdate(client.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ClientTable;
