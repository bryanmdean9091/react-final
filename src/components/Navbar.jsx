import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top ">
      <div className="container-fluid">
        <a className="navbar-brand ">
          <h1 className="storeName ms-5">FTV</h1>
        </a>

        <form className="d-flex ">
          <div class="dropdown show">
            <a
              class="btn dropDown dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Departments
            </a>

            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>
          <input
            className="searchBox"
            type="search"
            placeholder="Search"
            aria-label="Search"
          ></input>
          <button className="search " type="submit">Search...</button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
