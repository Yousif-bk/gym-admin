import React from "react";

function Landing() {
  return (
    <>
      <div className="cover-container">
        <main>
          <div className="container">
            <div className="p-5 mb-4 bg-body-tertiary rounded-3">
              <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Welcome to Our GYM</h1>
                <p className="col-md-8 fs-4">
                  We are thrilled to have you as part of
                  our fitness community. Whether you are a seasoned gym-goer or
                  new to the world of fitness, we are here to support you on
                  your wellness journey
                </p>
                <button className="btn btn-primary btn-lg" type="button">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Landing;
