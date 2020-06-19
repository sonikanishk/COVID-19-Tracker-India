import React from 'react';
import Chart from 'react-apexcharts'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Charts(props) {
    var  cases  = props.data;
      const days = [];
      const TotalCases = [];
      const TotalDeaths = [];
      const TotalRecovered = [];
      var i = 0;

      cases.map(val=>{
        return(
          days[i]=val.date,
          TotalCases[i]=val.totalconfirmed,
          TotalRecovered[i]=val.totalrecovered,
          TotalDeaths[i]=val.totaldeceased,
          i++
        )
      })
      var series= [{
        name: 'Total Cases',
        data: TotalCases
      }, {
        name: 'Total Recovered',
        data: TotalRecovered
      },{
        name: 'Total Deaths',
        data: TotalDeaths
      }];
      var options= {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: days
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy'
          },
        },
      };  
    
      return(
        <Chart responsive options={options} series={series} type="area" height="480px" /> 
      )
}


