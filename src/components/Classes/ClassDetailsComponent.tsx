const ClassDetailsComponent = ({ data, profileImage }: any) => {
  if (!data) {
    return (
      <p className="container px-4 py-5">No data available for details.</p>
    );
  }

  return (
    <>
      <div className="container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom">{`${data.coach_name}  Details`}</h2>
        <div className="row row-cols-1 row-cols-lg-3 g-4 py-5">
          <div className="form-card p-0">
            <img
              className="card-img-top"
              src={data.image || profileImage}
              width={42}
              alt="Card image cap"
            />
            <div className="form-card-body">
              <p className="card-text">
                <strong className="p-2">Class Brief</strong>
                <span>{data.coach_brief}</span>
              </p>
              <p className="card-text">
                <strong className="p-2">Coach Name</strong>
                <span>{data.coach_name}</span>
              </p>
              <p className="card-text">
                <strong className="p-2"> Class Description</strong>
                <span>{data.description}</span>
              </p>{" "}
              <p className="card-text">
                <strong className="p-2"> Timing</strong>
                <span>{data.timing}</span>
              </p>
              <p className="card-text">
                <strong className="p-2"> Price</strong>
                <span>{data.price}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassDetailsComponent;
