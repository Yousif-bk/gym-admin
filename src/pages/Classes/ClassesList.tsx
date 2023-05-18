import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../models/AppRoutes";
import ClassesTable from "../../components/Classes/ClassesTable";
import { useEffect, useState } from "react";
import Class from "../../models/Class";
import { ApiRoutes } from "../../models/ApiRoutes";
import api from "../../helper/axios/Api";

function ClassesList() {
  const handleAddClass = () => navigate(AppRoutes.Classes.create);
    const [classes, setClasses] = useState<Class[]>([]);
    const [isloading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();

   useEffect(() => {
     const fetchData = async () => {
       setIsLoading(true);
       try {
         const response = await api.get(ApiRoutes.Classes.fetch);
         setClasses(response.data);
         setIsLoading(false);
       } catch (error) {
         setIsLoading(false);
       }
     };

     fetchData();
   }, []);

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
        <ClassesTable data={classes} isloading={isloading} />
      </div>
    </>
  );
}

export default ClassesList;
