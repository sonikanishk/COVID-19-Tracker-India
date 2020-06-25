import React from 'react';
import './App.css';
// import StateTable from './components/StateTable'
// import Charts from './components/Charts'
// import Maps from './components/Maps'
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head1 from './Head1';
import Footer from './Footer';
import Overall from './components/Overall'
import About from './components/About'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import App from './App'

class World extends React.Component {
  state = {  
    status: {},
    countries: [],
  }
  
  componentDidMount() {

    Axios.get(`https://covid19.mathdro.id/api`).then(res => { 
      let curr_status = {
        deaths: res.data.deaths.value,
        confirmed: res.data.confirmed.value,
        recovered: res.data.recovered.value,
        time: res.data.lastupdate,
        
      };  
      this.setState({ status:curr_status });  
    }).catch(err => {
      console.log("error");
    });

    // Axios.get(`https://covid19.mathdro.id/api`).then(res => { 
       
    //   this.setState({ countries:curr_status });  
    // }).catch(err => {
    //   console.log("error");
    // });
  };
  
  render() {
    return (
      <Router>
      <Switch>
      <div id="home" className = "page-element" >
        <div class="wrap">
          <div class = "row">
            <div class = "col">
              <Route path="/World" exact component = {Head1} />
              <Route path="/" exact component = {App} />
              <hr></hr>
            </div>
          </div>
      
          <div className="App">
            {/* <div id="maps">
              <Maps states = {this.state.states}/>
            </div> */}
            <div id= "cards" class = "col-12">
              <Route path="/World" exact render={rp=><Overall status = {this.state.status}/>} />
            </div>
            <div class = "col-12">
              <Route path="/world" exact component = {About} />
            </div>
            <div class="col-12" id="charts">
              <div >
                {/* <Charts data = {this.state.withtime} data1 = {this.state.tests} /> */}
              </div>
            </div> 
            <div class="col-12" id="table">
              {/* <StateTable states={this.state.states}/>            */}
            </div>                 
          </div>
        </div>

        <Route path="/World" exact component = {Footer} />
      </div>
      </Switch>
      </Router>
    );
  }
}
export default World;


/* 
  count up
  dark mode
  about
  cards
  
 */       
         