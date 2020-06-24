import React from 'react';
import Chart from 'react-apexcharts';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import moment from 'moment';

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
        var date = moment(val.updatetimestamp,'DD/MM/YYYY HH:mm:ss').format('DD/MM');
        return(
          days1[i]=date,
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
        yaxis: {
          title: {
            text: 'Total Cases'
          },
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
        type: 'area',
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
        yaxis: {
          title: {
            text: 'Total Tests'
          },
        },
        xaxis: {
          type: 'date',
          categories: days1
        },
        tooltip: {
          x: {
            format: 'dd/MM'
          },
        },
        
      }; 
      

      return(
        <div style={{fontFamily:"Nunito"}}>
            <Row>
              <Col lg='6'>
                <h2 style={{ margin: "10px" }} > Graph of Growth of cases </h2>
                <Chart  options={options} series={series} type="area" height="480px" style={{ margin: "10px" }} />
              </Col>
              <Col lg='6'>
                <h2 style={{ margin: "10px" }} > Graph of Tests Conducted </h2>
                <Chart  options={options1} series={series1} type="area" height="480px" style={{ margin: "10px" }} />
              </Col>
            </Row>
        </div>   
      )
}



