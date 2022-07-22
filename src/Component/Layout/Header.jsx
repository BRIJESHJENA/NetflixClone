import React from "react";
import {Link} from "react-router-dom"

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black sticky-top">
        <div className="container">
        <Link to="" className="navbar-brand">
            <img
              src="https://thereelbits.com/wp-content/uploads/2017/05/Netflix-Logo.jpg"
              alt=""
              width="90"
            /><div className="d-inline p-1 text-black bg-white" style={{fontSize: "12px", borderRadius: "5px"}}>Clone</div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav col-10">
              <Link to="" className="nav-link">Home</Link>
              <Link to="../series" className="nav-link">Tv Shows</Link>
              <Link to="../movies" className="nav-link">Movies</Link>
              <Link to="../popular" className="nav-link">New & Popular</Link>
              <Link to="../list" className="nav-link">My List</Link>
            </div>
            <div className="text-end col-2">
              <button type="button" className="btn btn-outline-primary ">
                Log In 
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
