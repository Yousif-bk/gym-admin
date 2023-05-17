import { ErrorMessage, Field, Form, Formik } from "formik";
import { InitialValues } from "../../helper/validation/InitialValues";
import ValidationSchema from "../../helper/validation/ValidationSchema";

function ClientCreate() {
  const handleCreateClinet = (value: any) => {
    console.log(value, "values");
    
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="col-lg-8">
        <div className="card shadow-sm animated flipInX delay-02">
          <div className="card-header">
            <div className="card-header-title">Product information</div>
            <div className="card-body">
              <div className="row">
                <Formik
                  onSubmit={handleCreateClinet}
                   validationSchema={ValidationSchema}
                  initialValues={InitialValues}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <div className="row">
                        <div className="col-sm-12">
                          <label htmlFor="email">Name</label>
                          <div className="mb-4">
                            <Field
                              type="text"
                              className="form-control"
                              id="name"
                              name="name"
                              placeholder="Name"
                            />
                            <ErrorMessage
                              name="name"
                              component="div"
                              className="text-danger"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <label htmlFor="email">Phone</label>
                          <div className="mb-4">
                            <Field
                              type="number"
                              className="form-control"
                              id="phone"
                              name="phone"
                              placeholder="Phone"
                            />
                            <ErrorMessage
                              name="phone"
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
                              name="subscriptionType"
                              placeholder="Subscription Type"
                            />
                            <ErrorMessage
                              name="subscriptionType"
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
                          <button type="submit" className="btn btn-primary">
                            Save
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

export default ClientCreate;
