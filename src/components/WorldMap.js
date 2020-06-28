import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Chart } from "react-google-charts";

export default function StateTable(props) {
    const data = [
        ["Country Code","Country","Total Cases"],
      ];
      const Countries = props.Countries;
      Countries.map(country=>{
        const pair = [country.CountryCode,country.Country,country.TotalConfirmed];
        return(
              data.push(pair)
          )
      })
return (
    <div style={{textAlign: "center",paddingTop: "10rem",paddingBottom: "10rem" }}>
        <div className="App">
        <Chart
          chartEvents={[
            {
              eventName: "select",
              callback: ({ chartWrapper }) => {
                const chart = chartWrapper.getChart();
                const selection = chart.getSelection();
                if (selection.length === 0) return;
                // const region = data[selection[0].row + 1];
                // console.log("Selected : " + region);
              }
            }
          ]}
          chartType="GeoChart"
          width="100%"
          height="600px"
          options = {{
            // region: 'IT',
            // displayMode: 'markers',
            // colorAxis: {colors: ['#FFF9C4','#FF8080',]}
            colorAxis: {colors: ['white','orange','orange','red']}

          }}
          
          data={data}
        />
      </div>
    </div>
    
  );
}
