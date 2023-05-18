import { ErrorMessage, Field, Form, Formik } from "formik";
import { ApiRoutes } from "../../models/ApiRoutes";
import { AppRoutes } from "../../models/AppRoutes";
import api from "../../helper/axios/Api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ClassValidationSchema from "../../helper/validation/ClassValidationSchema";
import { ClassInitialValues } from "../../helper/validation/ClassInitialValues";



function ClassesForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [classValue, setClassValue] = useState(null);
  const isEditMode = !!id;

  useEffect(() => {
    if (isEditMode) {
      const fetchClient = async () => {
        try {
          const response = await api.get(`/classes/${id}`);
          console.log(response.data);
          
          setClassValue(response.data);
        } catch (error) {}
      };

      fetchClient();
    }
  }, [id]);

  const handleOnSubmit = async (classData: any, { setSubmitting }: any) => {
    if (isEditMode) {
      try {
        const respon = await api.put(`/classes/${id}`, classData);
        console.log(respon.data, "fhghfdg");

        setSubmitting(false);
        navigate(AppRoutes.Classes.list);
      } catch (error) {
        setSubmitting(false);
      }
    } else {
      try {
        await api.post(ApiRoutes.Classes.create, classData);
        setSubmitting(false);
        navigate(AppRoutes.Classes.list);
      } catch (error) {
        setSubmitting(false);
      }
    }
  };
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="col-lg-8">
        <div className="card shadow-sm animated flipInX delay-02">
          <div className="card-header">
            <div className="card-header-title">
              {isEditMode ? "Edit Client" : "Create Client"}
            </div>
            <div className="card-body">
              <div className="row">
                <Formik
                  onSubmit={handleOnSubmit}
                  validationSchema={ClassValidationSchema}
                  initialValues={classValue || ClassInitialValues}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <div className="row">
                        <div className="col-sm-12">
                          <label htmlFor="email">Class Title</label>
                          <div className="mb-4">
                            <Field
                              type="text"
                              className="form-control"
                              id="name"
                              name="class_title"
                              placeholder="Class Title"
                            />
                            <ErrorMessage
                              name="class_title"
                              component="div"
                              className="text-danger"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <label htmlFor="email">Coach Name</label>
                          <div className="mb-4">
                            <Field
                              type="text"
                              className="form-control"
                              id="phone"
                              name="coach_name"
                              placeholder="Coach Name"
                            />
                            <ErrorMessage
                              name="coach_name"
                              component="div"
                              className="text-danger"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <label htmlFor="email">Timing </label>
                          <div className="mb-4">
                            <Field
                              type="text"
                              className="form-control"
                              id="subscriptionType"
                              name="timing"
                              placeholder="Timing"
                            />
                            <ErrorMessage
                              name="timing"
                              component="div"
                              className="text-danger"
                            />
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <label htmlFor="email">Price</label>
                          <div className="mb-4">
                            <Field
                              type="text"
                              className="form-control"
                              id="price"
                              name="price"
                              placeholder="Price"
                            />
                            <ErrorMessage
                              name="price"
                              component="div"
                              className="text-danger"
                            />
                          </div>
                        </div>

                        <div className="d-flex justify-content-end gap-3">
                          <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <div
                                className="spinner-grow spinner-grow-sm"
                                role="status"
                              ></div>
                            ) : (
                              "Save"
                            )}
                          </button>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassesForm