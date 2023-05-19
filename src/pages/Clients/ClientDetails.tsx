import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../helper/axios/Api";
import ClientDetailsComponent from "../../components/Clients/ClientDetailsComponent";

function ClientDetails() {
  const [clientValue, setClientValue] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const response = await api.get(`/clients/${id}`);
        console.log(response.data);

        setClientValue(response.data);
      } catch (error) {}
    };

    fetchClient();
    return () => {};
  }, [id]);

  return (
    <>
      <div>
        <ClientDetailsComponent
          data={clientValue}
          profileImage="https://hips.hearstapps.com/hmg-prod/images/mh-trainer-2-1533576998.png"
        />
      </div>
    </>
  );
}

export default ClientDetails;
