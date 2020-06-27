import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Head.css';
import { Link } from 'react-router-dom'

export default function Head() {
    return (
        <div>
            <div className="navbar1">
                <div className="logo1">
                    {/* <h3>
                        <b> COVID-19 TRACKER </b>
                        <i className="fas fa-globe-americas"></i>

                    </h3> */}
                </div>
                    <div className="menu">
                        <Link to="/World"> World  |</Link>
                        <Link to="/">India </Link>
                    </div>
                    <div className="help-line">
                        <p>
                            <b>
                                COVID Helpline No:
                        </b>
                            <a href="tel:+91-11-23978046" target="_blank" rel="noopener noreferrer"><span> +91-11-23978046 </span></a>
                            <a href="tel:1075" target="_blank" rel="noopener noreferrer"><span> | 1075</span></a>
                        </p>
                    </div>
                <div className="bg">

                </div>
            </div>
            
        </div>
    );
};
