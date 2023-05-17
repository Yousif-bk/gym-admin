import React from 'react'

function Sidebar() {
  return (
    <>
      <div className="d-flex flex-column flex-shrink-0 p-3 bg-light">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <svg calcMode="bi me-2" width="40" height="32">
          </svg>
          <span className="fs-4">Sidebar</span>
        </a>
        <hr></hr>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              <svg className="bi me-2" width="16" height="16">
                {/* <use className:href="#home"></use> */}
              </svg>
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16">
                <use className="#speedometer2"></use>
              </svg>
              Dashboard
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;