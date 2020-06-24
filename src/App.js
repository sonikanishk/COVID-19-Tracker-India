import React from 'react';
import './App.css';
import StateTable from './components/StateTable'
import Charts from './components/Charts'
import Maps from './components/Maps'
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from './Head';
import Footer from './Footer'

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
      <div id="home" className = "page-element" >
        <div class="wrap">
          <div class = "row">
            <div class = "col">
              <Head/>
              <hr></hr>
            </div>
          </div>
          <div className="App ">
            <div id="maps">
              <Maps states = {this.state.states}/>
            </div>
            <div class="row" id="charts">
              <div class="col">
                <Charts data = {this.state.withtime} data1 = {this.state.tests} />
              </div>
            </div> 
            <div id="table">
              <StateTable states={this.state.states}/>           
            </div>                 
          </div>
        </div>

         <Footer/> 
      </div>
      
    );
  }
}
export default App;



        
         