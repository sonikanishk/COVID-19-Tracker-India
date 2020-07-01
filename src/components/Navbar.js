import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
//import {Link} from 'react-router-dom';
export default function Navbar() {
    return(
      <div>
        <nav className="navbar" style={{ position: "fixed" }} >
          <ul className="navbar-nav">
            <li className="logo">
              <a href="#home" className="nav-link">
                <span className="link-text logo-text ">Menu</span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fad"
                  data-icon="angle-double-right"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
                >
                  <g className="fa-group">
                    <path
                      fill="currentColor"
                      d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                      className="fa-secondary"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                      className="fa-primary"
                    ></path>
                  </g>
                </svg>
              </a>
            </li>

            <li className="nav-item">
              <a href="#cards" className="nav-link">
              <i className="fas fa-book-medical fa-2x"></i>
                <span className="link-text">Status</span>
              </a>
            </li>
             <li className="nav-item">
              <a href="#maps" className="nav-link">
              <i className="fas fa-map-marked-alt fa-2x"></i>
                <span className="link-text">Maps</span>
              </a>
            </li>
             <li className="nav-item">
              <a href="#about" className="nav-link">
                <i className="fas fa-info-circle fa-2x"></i>
                <span className="link-text">About</span>
              </a>
            </li>

            <li className="nav-item">
              <a href="#charts" className="nav-link">
              <i className="fas fa-chart-area fa-2x"></i>
                <span className="link-text">Charts</span>
              </a>
            </li>

            <li className="nav-item">
              <a href="#table" className="nav-link">
                <i className="fa fa-table fa-2x" aria-hidden="true"></i>
                <span className="link-text">Tables</span>
              </a>
            </li>

            <li className="nav-item">
              <a href="#home" className="nav-link">
                <i className="fas fa-angle-up fa-2x"></i>
                <span className="link-text"> Top </span>
              </a>
            </li>
           </ul>
         </nav>

            
        </div>
    )
}

















