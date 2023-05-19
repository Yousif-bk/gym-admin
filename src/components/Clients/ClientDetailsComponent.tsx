const ClientDetailsComponent = ({ data, profileImage }: any) => {
  if (!data) {
    return (
      <p className="container px-4 py-5">No data available for details.</p>
    );
  }

  return (
    <>
      <div className="container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom">{`${data.full_name} Details`}</h2>
        <div className="row row-cols-1 row-cols-lg-3 g-4 py-5">
          <div className="card p-0">
            <img
              className="card-img-top"
              src={profileImage}
              width={42}
              alt="Card image cap"
            />
            <div className="card-body">
              <p className="card-text">
                <strong className="p-2">Full Name</strong>
                <span>{data.full_name}</span>
              </p>
              <p className="card-text">
                <strong className="p-2">Address</strong>
                <span>{data.address}</span>
              </p>
              <p className="card-text">
                <strong className="p-2">Mobile Number</strong>
                <span>{data.mobile_number}</span>
              </p>
              <p className="card-text">
                <strong className="p-2">Subscription type</strong>
                <span>{data.subscription_plan}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientDetailsComponent;
