import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./MangoText.css";
import Color from "./ColorScreen";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="mangoText" href="#">
          Mango
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/home">
                <a className="nav-link active" aria-current="page">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <Link to="/ColorScreen">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Mango recipies
              </a>
              <ul className="dropdown-menu" data-bs-popper="static">
                <li>
                  <a className="dropdown-item" href="#">
                    Sweets
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Healthy
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Savory
                  </a>
                </li>
                <li>
                  <Link to="/about" className="dropdown-item">
                    Drinks
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
