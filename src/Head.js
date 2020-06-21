import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactCountryFlag from "react-country-flag";
import './Head.css';
class Head extends React.Component {
    render(){
        return(
            <div className="headd" >
                <h2 className="text-center" >
                    <b>
                        COVID-19 TRACKER INDIA 
                    </b>
                    <ReactCountryFlag style={{ margin: "10px" }} countryCode="IN" svg />
                </h2>
                <hr></hr>
            </div>
        );
    };
};
export default Head;