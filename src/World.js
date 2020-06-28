import React from 'react';
import './App.css';
// import StateTable from './components/StateTable'
// import Charts from './components/Charts'
import WorldMap from './components/WorldMap'
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Head from './Head';
import Footer from './Footer';
import Overall from './components/Overall'
import About from './components/About'
// import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from './components/Navbar'

class World extends React.Component {
  state = {  
    status: {},
    countries: [],
  }
  
  componentDidMount() {

    Axios.get(`https://api.covid19api.com/summary`).then(res => { 
      let curr_status = {
        deaths: res.data.Global.TotalDeaths,
        confirmed: res.data.Global.TotalConfirmed,
        recovered: res.data.Global.TotalRecovered,
        time: res.data.Date,
        
      };  
      this.setState({countries:res.data.Countries});
      this.setState({ status:curr_status });  
    }).catch(err => {
      console.log("error");
    });

  };
  
  render() {
    return (
      
      <div id="home" className = "page-element" >
        <Navbar/>
        <div class="wrap">
          <div className="App">
            <div id= "cards" class = "col-12">
              <Overall status = {this.state.status}/>
            </div>
            <div id="maps">
              <WorldMap Countries={this.state.countries}/>
            </div>
            <div id="about" class = "col-12">
              <About/>
            </div>
            {/* <div class="col-12" id="charts">
              <div >
                <Charts data = {this.state.withtime} data1 = {this.state.tests} />
              </div>
            </div>  */}
            {/* <div class="col-12" id="table">
              <StateTable states={this.state.states}/>           
            </div> */}                 
          </div> 
        </div>
        <Footer/>
      </div>
     
    );
  }
}
export default World;


/* 
  dark mode
 */       
         