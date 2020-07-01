import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Chart } from "react-google-charts";


export default function StateTable(props) {
      var data = [
        ["Country Code","Total Cases"],
      ];
      const Countries = props.Countries;
      Countries.map(country=>{
        var pair = [country.CountryCode,country.TotalConfirmed];
        return(
              data.push(pair)
          )
      })
return (
    <div style={{textAlign: "center",paddingTop: "10rem",paddingBottom: "10rem" }}>
        <div>
        <Chart
          
          chartType="GeoChart"
          width="100%"
          height="600px"
          options = {{
            displayMode: 'auto',
            
            colorAxis: {colors: ['white','orange','orange','red']}

          }}
          
          data={data}
        />
      </div>
    </div>
    
  );
}

