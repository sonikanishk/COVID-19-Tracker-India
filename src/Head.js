import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactCountryFlag from "react-country-flag";
import './Head.css';
class Head extends React.Component {
    render(){
        return(
            <div class="row">
                <div className="headd col-sm-6" >
                    <h2>
                        <b> COVID-19 TRACKER INDIA </b>
                        <span class="flag">
                            <ReactCountryFlag countryCode="IN" svg />
                        </span>
                    </h2>
                </div>
                <div class="help-line col-sm-6">
                    <p>
                        <b>
                            COVID Helpline No: 
                        </b>
                        <a href="tel:+91-11-23978046" target="_blank" rel="noopener noreferrer"><span> +91-11-23978046 </span></a>
                        <a href="tel:1075" target="_blank" rel="noopener noreferrer"><span> | 1075</span></a>
                    </p>
                </div>

                <div class="col">
                    <nav class="navbar">
                        <ul class = "nav">
                            <li class="nav-element">
                                <a href="#home">
                                    <p> About </p>
                                </a>
                            </li>
                            <li class="nav-element">
                                <a href="#maps">
                                    <p> Map </p>
                                </a>
                            </li>
                            <li class="nav-element">
                                <a href="#charts">
                                    <p> Charts </p>    
                                </a>    
                            </li>
                            <li class="nav-element">
                                <a href="#table">
                                    <p> Table </p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    };
};
export default Head;

