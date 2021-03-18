import React from "react";
import { Link } from "react-router-dom";
const NavBar = (props) => {
    console.log("Nav opened");
  return (
    <nav className="navbar navbar-dark bg-dark">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <h4 className="nav-link active" aria-current="page">Crud-App</h4>
          </li>
          </ul>
          <Link className="btn btn-outline-light me-2" to={props.link}>
          {props.btnText}
        </Link>
    </nav>
  );
};

export default NavBar;
