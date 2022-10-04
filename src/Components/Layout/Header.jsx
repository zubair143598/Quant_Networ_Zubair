import React from "react";

const Header = () => {
  return (
    
      <nav className="navbar header sticky-top navbar-expand-lg bg-white">
        <div className="container">
          <img className="logo" src="./Assists/logo-2.png" alt="" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="list-unstyled navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <a className="nav-link active " aria-current="page" href="#">
                  Who
                </a>
                <div className="navdd">pasdasdasd</div>
              </li>
              <li className="nav-item ">
                <a className="nav-link active " aria-current="page" href="#">
                  What
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active " aria-current="page" href="#">
                  How
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active " aria-current="page" href="#">
                  Why
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active " aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active " aria-current="page" href="#">
                  Sign In
                </a>
              </li>
              <form action="">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="search"
                  aaria-label="Search"
                  />
              </form>
            </ul>
          </div>
        </div>
      </nav>
    
  );
};

export default Header;
