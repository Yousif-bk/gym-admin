import React from "react";
import { useNavigate } from "react-router-dom";
import Class from "../../models/Class";
import api from "../../helper/axios/Api";

interface ClientTableProps {
  data: Class[];
  isloading: boolean;
}

const ClassesTable: React.FC<ClientTableProps> = ({ data, isloading }) => {
  const navigate = useNavigate();
  const handleDelete = async (classId: string) => {
    try {
      await api.delete(`/classes/${classId}`);
    } catch (error) {
      console.error("Error deleting class:", error);
    }
  };
  const handleUpdate = (classId: string) => navigate(`/classes/${classId}`);
  const handleDetails = (classId: string) =>
    navigate(`/class/details/${classId}`);

  return (
    <table className="table w-100 mb-4 main-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Coach Name</th>
          <th>image</th>
          <th>Timing</th>
          <th>Price</th>
          <th>Description</th>
          <th>Coach Brief</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {isloading && (
          <tr>
            <td colSpan={8} className="text-center">
              <div className="spinner-grow" role="status"></div>
            </td>
          </tr>
        )}
        {data.map((item) => (
          <tr key={item.id}>
            <td>
              <div className="table_cell">{item.id}</div>
            </td>
            <td>
              <div
                className="table_cell clickable text-primary table_cell-content"
                onClick={() => handleDetails(item.coach_name)}
              >
                {item.coach_name}
              </div>
            </td>
            <td>
              <div className="table_cell">
                {item.image ? (
                  <img
                    src={item.image}
                    width={60}
                    height={60}
                    alt="Class Image"
                    className="table_image"
                  />
                ) : (
                  <img
                    src="https://example.com/placeholder-image.jpg"
                    alt="Placeholder"
                    className="table_image"
                  />
                )}
              </div>
            </td>
            <td>
              <div className="table_cell table_cell-content">{item.timing}</div>
            </td>
            <td>
              <div className="table_cell table_cell-content">{item.price}</div>
            </td>
            <td>
              <div className="table_cell table_cell-content">
                {item.description}
              </div>
            </td>
            <td>
              <div className="table_cell table_cell-content">
                {item.coach_brief}
              </div>
            </td>
            <td>
              <i
                className="bi bi-trash p-3 clickable"
                onClick={() => handleDelete(item.id)}
              />
              <i
                className="bi bi-pen clickable"
                onClick={() => handleUpdate(item.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ClassesTable;
