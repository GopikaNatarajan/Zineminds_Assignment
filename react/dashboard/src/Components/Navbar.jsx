import React from 'react'
import './Style.css';
import { useState } from "react";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className="container-fluid bg-navyblue nav justify-content-evenly">
        <div className="col-md-6 d-flex">
          <img src="./img/logo2.jpg" alt="" height="40cm" className="mt-1" />
          <span className="team">On Teams <i className="fas fa-angle-down pl-3" style={{ color: "rgb(91, 180, 231)" }}></i></span>
          <div>
            <span className="fa fa-solid fa-plus pl-3 pt-3" style={{ color: "#ffffff" }}></span>
            <span className="line pl-4 mt-3">|</span>
            <span className="fa-solid fa-gear pl-4 pt-3" style={{ color: "#ffffff" }}></span>
            <span className="line pl-4 mt-3">|</span>
            <span className="fa-solid fa-align-left pl-4 pt-3" style={{ color: "#ffffff" }}></span>
          </div>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-4 ">
          <div className="input-group input-width mt-1 ">
            <div className="input-group-prepend">
              <span className="input-group-text search-bar ">
                <i className="fas fa-search"></i>
              </span>
            </div>
            <input type="text" className="form-control search-bar" placeholder="Search" aria-label="Search" aria-describedby="search-addon"
              value={searchTerm}

              onChange={(event) => setSearchTerm(event.target.value)} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar