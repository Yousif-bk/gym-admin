import { useState, useEffect } from "react";
import Client from "../../models/Client";
import api from "../../helper/axios/Api";
import { useNavigate } from "react-router-dom";



const ClientTable = () => {
  const navigate = useNavigate();
  const [clients, setClients] = useState<Client[]>([]);
  const [isloading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    setIsLoading(true)
    try {
      const response = await api.get("/clients");
      setClients(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching clients:", error);
      setIsLoading(false);
    }
  };

  const handleDelete = async (clientId: string) => {
    try {
      await api.delete(`/clients/${clientId}`);
      const updatedClients = clients.filter((client) => client.id !== clientId);
      setClients(updatedClients);
    } catch (error) {
      console.error("Error deleting client:", error);
    }
  };

  const handleUpdate = (clientId: string) => navigate(`/clients/${clientId}`);
  const handleDetails = (clientId: string) =>
    navigate(`/client/details/${clientId}`);

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
        {clients.length > 0 ? (
          clients.map((client) => (
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
          ))
        ) : (
          <tr>
            <td colSpan={8} className="text-center">
              No clients found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ClientTable;
