import React, { useEffect, useState } from 'react'
import ClassDetailsComponent from '../../components/Classes/ClassDetailsComponent';
import { useParams } from 'react-router-dom';
import api from "../../helper/axios/Api";

function ClassDetails() {
    const [classValue, setClassValue] = useState(null)
 const { id } = useParams();


    useEffect(() => {
      const fetchClient = async () => {
        try {
          const response = await api.get(`/classes/${id}`);
          console.log(response.data);

          setClassValue(response.data);
        } catch (error) {}
      };

      fetchClient();
      return () => {};
    }, [id]);
  return (
    <>
      <div>
        <ClassDetailsComponent
          data={classValue}
          profileImage="https://hips.hearstapps.com/hmg-prod/images/mh-trainer-2-1533576998.png"
        />
      </div>
    </>
  );
}

export default ClassDetails