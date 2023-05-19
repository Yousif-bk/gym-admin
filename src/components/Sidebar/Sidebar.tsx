import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [activeItem, setActiveItem] = useState("Home");

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };
  return (
    <>
      <div className="d-flex flex-column flex-shrink-0 p-3 bg-light">
        <a className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <span>Admin User</span>
        </a>
        <hr></hr>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item" onClick={() => handleItemClick("Home")}>
            <Link
              to="/landing"
              className={
                activeItem === "Home" ? "nav-link active" : "nav-link link-dark"
              }
            >
              <i className="bi bi-house p-2"></i>
              Home
            </Link>
          </li>
          <li onClick={() => handleItemClick("Clients")}>
            <Link
              to="/client/list"
              className={
                activeItem === "Clients"
                  ? "nav-link active"
                  : "nav-link link-dark"
              }
            >
              <i className="bi bi-file-person p-2"></i> Clients
            </Link>
          </li>
          <li onClick={() => handleItemClick("Classes")}>
            <Link
              to="/classes/list"
              className={
                activeItem === "Classes"
                  ? "nav-link active"
                  : "nav-link link-dark"
              }
            >
              <i className="bi bi-flower3 p-2"></i> Classes
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
