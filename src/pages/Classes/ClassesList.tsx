import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../models/AppRoutes";
import ClassesTable from "../../components/Classes/ClassesTable";

function ClassesList() {
  const navigate = useNavigate();
  const handleAddClass = () => navigate(AppRoutes.Classes.create);

  return (
    <>
      <div className="content container-fluid">
        <div className="tabel-header py-3">
          <div className="d-grid d-sm-flex gap-2">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleAddClass}
            >
              Add Class
            </button>
          </div>
        </div>
        <ClassesTable />
      </div>
    </>
  );
}

export default ClassesList;
