import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Head.css';
import {Link} from 'react-router-dom'

export default function Head(){
        return(
            <div className="row">
                <div className="headd col-sm-6" >
                    <h2>
                        <b> COVID-19 TRACKER </b> 
                        <i className="fas fa-globe-americas"></i>
                        
                    </h2>
                </div>
                <div className="help-line col-sm-6">
                    <p>
                        <b>
                            COVID Helpline No: 
                        </b>
                        <a href="tel:+91-11-23978046" target="_blank" rel="noopener noreferrer"><span> +91-11-23978046 </span></a>
                        <a href="tel:1075" target="_blank" rel="noopener noreferrer"><span> | 1075</span></a>
                    </p>
                </div>

                <div className="col">
                    <nav className="navbar">
                        <ul className = "nav">
                            <li className="nav-element">
                                <Link to="/World">
                                    <p> World </p>
                                </Link>
                            </li>
                            <li className="nav-element">
                                <Link to="/">
                                    <p> India </p>
                                </Link>
                            </li>
                            <li className="nav-element">
                                <a href="#about">
                                    <p> About </p>
                                </a>
                            </li>
                            <li className="nav-element">
                                <a href="#maps">
                                    <p> Map </p>
                                </a>
                            </li>
                            <li className="nav-element">
                                <a href="#charts">
                                    <p> Charts </p>    
                                </a>    
                            </li>
                            <li className="nav-element">
                                <a href="#table">
                                    <p> Table </p>
                                </a>
                            </li>
                            <li className="nav-element">
                                <a href="#cards">
                                    <p> Status </p>
                                </a>
                            </li>
                            
                        </ul>
                        
                    </nav>
                </div>
            </div>
        );
};
