import React from 'react';
import './App.css';
import StateTable from './components/StateTable'
import Charts from './components/Charts'
import Maps from './components/Maps'
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from './Head';
import Footer from './Footer';
import Overall from './components/Overall'
import About from './components/About'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import World from './World'

class App extends React.Component {
  state = {  
    status: {},
    states: [],
    withtime: [],
    tests: []
  }
  
  componentDidMount() {

    Axios.get(`https://api.covid19india.org/data.json`).then(res => { 
      let curr_status = {
        deaths: res.data.statewise[0].deaths,
        confirmed: res.data.statewise[0].confirmed,
        recovered: res.data.statewise[0].recovered,
        time: res.data.statewise[0].lastupdatedtime,
        
      };  
      this.setState({ status:curr_status });
      this.setState({states:res.data.statewise});
      this.setState({tests:res.data.tested});
      this.setState({withtime:res.data.cases_time_series});
      
      
    }).catch(err => {
      console.log("error");
    })
  }
  
  render() {
    return (
      <Router>
      <Switch>
      <div id="home" className = "page-element" >
        <div class="wrap">
          <div class = "row">
            <div class = "col">
              <Route path="/" exact component = {Head} />
              <Route path="/World" exact component = {World} />
              <hr></hr>
            </div>
          </div>
      
          <div className="App">
            <div id= "cards" class = "col-12">
              <Route path="/" exact render={rp=><Overall status = {this.state.status}/>} />
            </div>
            <div id = "about" class = "col-12">
              <Route path="/" exact component = {About} />
            </div>
            <div id="maps">
              <Route path="/" exact render={rp=> <Maps states = {this.state.states} />} />
            </div>
            <div class="col-12" id="charts">
              <div >
                <Route path="/" exact render={rp=> <Charts data = {this.state.withtime} data1 = {this.state.tests} />} />
              </div>
            </div> 
            <div class="col-12" id="table">
              <Route path="/" exact render={rp=> <StateTable states={this.state.states}/>  } />
   
            </div>                 
          </div>
        </div>

        <Route path="/" exact component = {Footer} />
      </div>
      </Switch>
      </Router>
    );
  }
}
export default App;


/* 
  count up
  dark mode
  about
  cards
  
              <Route path="/" exact render={rp=>} />
 */       
         