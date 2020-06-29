import React from 'react';
import Chart from 'react-apexcharts';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import moment from 'moment';

export default function WorldCharts(props) {
    var status = props.status;
    // var country = props.country; 
      const time = status.time;
      const Data = [status.confirmed,status.deaths,status.recovered];
      var time1 = moment(time, "YYYY-MM-DDTHH:mm:ss.SSS");
      var date = moment(time1,'DD/MM/YYYY HH:mm:ss.SSS').format('LL');

      var series1= [{
        name: 'Total Cases',
        type: 'bar',
        data: Data,
      }];
      
      var options1= {
        chart: {
          height: 350,
          type: 'bar'
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
          categories: ["Cases","Deaths","Recovered"]
        },
        
      }; 
        
      

      return(
        <div style={{fontFamily:"Nunito"}}>
            <Row>
              <Col>
                <h2 style={{ margin: "10px" }} > Status of Corona Virus</h2>
                <Chart  options={options1} series={series1} type="bar" height="480px" style={{ margin: "10px" }} />
              </Col>
              
            </Row>
        </div>   
      )
      }