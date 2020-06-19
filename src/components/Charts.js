import React from 'react';
import Chart from 'react-apexcharts'
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


export default function Charts(props) {
    var cases = props.data;
    var tests = props.data1; 
      const days = [];
      const TotalCases = [];
      const TotalDeaths = [];
      const TotalRecovered = [];
      
      const days1 = [];
      const TotalSamples = [];

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
      i=0;
      tests.map(val=>{
        return(
          days1[i]=val.updatetimestamp,
          TotalSamples[i]=val.totalsamplestested,
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
      
      var series1= [{
        name: 'Total Samples',
        data: TotalSamples
      }];
      
      var options1= {
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
          type: 'time',
          categories: days1
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy'
          },
        },
        
      };  

      return(
        <div>
            <Row>
              <Col md='6'>
                <h2 style={{ margin: "10px" }} > Graph of Tests Conducted </h2>
                <Chart responsive options={options1} series={series1} type="area" height="480px" style={{ margin: "10px" }} />
              </Col>
              <Col md='6'>
                <h2 style={{ margin: "10px" }} > Graph of Growth of cases </h2>
                <Chart responsive options={options} series={series} type="area" height="480px" style={{ margin: "10px" }} />
              </Col>
            </Row>
        </div>   
      )
}


