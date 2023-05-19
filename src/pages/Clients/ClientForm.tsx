import { ErrorMessage, Field, Form, Formik } from "formik";
import { InitialValues } from "../../helper/validation/InitialValues";
import ValidationSchema from "../../helper/validation/ValidationSchema";
import api from "../../helper/axios/Api";
import { useNavigate, useParams } from "react-router-dom";
import { AppRoutes } from "../../models/AppRoutes";
import { ApiRoutes } from "../../models/ApiRoutes";
import { useEffect, useState } from "react";

function ClientForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [clientValue, setClientValue] = useState(null);
  const isEditMode = !!id;

  useEffect(() => {
    if (isEditMode) {
      const fetchClient = async () => {
        try {
          const response = await api.get(`/clients/${id}`);
          setClientValue(response.data);
        } catch (error) {}
      };
      fetchClient();
    }
  }, [id]);

  const handleOnSubmit = async (clientData: any, { setSubmitting }: any) => {
    if (isEditMode) {
      try {
       await api.put(`/clients/${id}`, clientData);
        setSubmitting(false);
        navigate(AppRoutes.Clients.list);
      } catch (error) {
        setSubmitting(false);
      }
    } else {
      try {
        await api.post(ApiRoutes.Clients.create, clientData);
        setSubmitting(false);
        navigate(AppRoutes.Clients.list);
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
                  validationSchema={ValidationSchema}
                  initialValues={clientValue || InitialValues}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <div className="row">
                        <div className="col-sm-12">
                          <label htmlFor="email">Full Name</label>
                          <div className="mb-4">
                            <Field
                              type="text"
                              className="form-control"
                              id="name"
                              name="full_name"
                              placeholder="Name"
                            />
                            <ErrorMessage
                              name="full_name"
                              component="div"
                              className="text-danger"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <label htmlFor="email">Phone</label>
                          <div className="mb-4">
                            <Field
                              type="text"
                              className="form-control"
                              id="phone"
                              name="mobile_number"
                              placeholder="Phone"
                            />
                            <ErrorMessage
                              name="mobile_number"
                              component="div"
                              className="text-danger"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <label htmlFor="email">Subscription Type </label>
                          <div className="mb-4">
                            <Field
                              type="text"
                              className="form-control"
                              id="subscriptionType"
                              name="subscription_plan"
                              placeholder="Subscription Type"
                            />
                            <ErrorMessage
                              name="subscription_plan"
                              component="div"
                              className="text-danger"
                            />
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <label htmlFor="email">Address</label>
                          <div className="mb-4">
                            <Field
                              type="text"
                              className="form-control"
                              id="address"
                              name="address"
                              placeholder="Address"
                            />
                            <ErrorMessage
                              name="address"
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

export default ClientForm;
