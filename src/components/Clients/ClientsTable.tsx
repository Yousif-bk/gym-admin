import React from "react";
import Client from "../../models/Client";
import { useNavigate } from "react-router-dom";



interface ClientTableProps {
  clients: Client[];
  fields: {
    key: keyof Client;
    label: string;
    ignoreObject?: boolean;
  }[];
  isloading: boolean;
}

const ClientTable: React.FC<ClientTableProps> = ({ clients, isloading, fields }) => {
  const navigate = useNavigate();

    const handleClientClick = (clientId:string) => 
      navigate(`/clients/${clientId}`);
    

  return (
    <table className="table w-100 mb-4 main-table">
      <thead>
        <tr>
          {fields.map((field) => (
            <th key={field.key}>{field.label}</th>
          ))}
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

        {clients.map((item) => (
          <tr key={item.id} className="main-cell">
            {fields.map((field) => (
              <td key={field.key} onClick={() => handleClientClick(item.id)}>
                <div className="table_cell">
                  {field.ignoreObject && typeof item[field.key] === "object"
                    ? ""
                    : item[field.key]}
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ClientTable;
