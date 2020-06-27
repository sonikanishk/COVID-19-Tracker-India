import React from 'react';
import './App.css';
import StateTable from './components/StateTable'
import Charts from './components/Charts'
import Maps from './components/Maps'
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Overall from './components/Overall'
import About from './components/About'
import Footer from './Footer';
import Navbar from './components/Navbar'

class Home extends React.Component {
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
        <Navbar/>
        <div className="wrap">

          <div className="App">
            <div id= "cards" className = "col-12">
                <Overall status = {this.state.status}/>  
            </div>
            <div id = "about" className = "col-12">
                <About/>
            </div>
            <div id="maps">
                <Maps states = {this.state.states} />
            </div>
            <div className="col-12" id="charts">
              <div >
                <Charts data = {this.state.withtime} data1 = {this.state.tests} />
              </div>
            </div> 
            <div className="col-12" id="table">
                <StateTable states={this.state.states}/>
   
            </div>                 
          </div>
        </div>
        <Footer/>
      </div>
     
    );
  }
}
export default Home;


/* 
  
  dark mode
  cards
  
              
 */       
         