import React from 'react';
import './App.css';
import ChooseCountry from './components/ChooseCountry'
import WorldMap from './components/WorldMap'
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import CountryCards from './components/CountryCards'
import About from './components/About';
import Navbar from './components/Navbar';
import CountryTable from './components/CountryTable';
import HashLoader from "react-spinners/HashLoader";
import WorldChart from './components/WorldChart'
class World extends React.Component {
  state = {  
    status: [],
    global: [],
    countries: [],
    pickedCountry: '',
    loading: true,
  }
  
  componentDidMount() {

    Axios.get(`https://api.covid19api.com/summary`).then(res => { 
      let curr_status = {
        deaths: res.data.Global.TotalDeaths,
        confirmed: res.data.Global.TotalConfirmed,
        recovered: res.data.Global.TotalRecovered,
        time: res.data.Date,
        
      };  
      this.setState({ status:curr_status}); 
      this.setState({global:curr_status});
      let setcountries = res.data.Countries;
      this.setState({countries:setcountries});
      this.setState({loading:false}); 
    }).catch(err => {
      console.log("error");
    });  
};
handleCountryChange = async (pickedCountry) =>{

  if(pickedCountry==="global"){
    let curr_status = {
      deaths: this.state.global.deaths,
      confirmed: this.state.global.confirmed,
      recovered: this.state.global.recovered,
      time: this.state.global.date,
      
    };
    this.setState({ status:curr_status });
  }
  else{

  const FilterData = this.state.countries.filter((data,i)=>{
    return(
      pickedCountry !==""?data.Country===pickedCountry:console.log(data)
    )
  })
  let curr_status = {
    deaths: FilterData[0].TotalDeaths,
    confirmed: FilterData[0].TotalConfirmed,
    recovered: FilterData[0].TotalRecovered,
    time: FilterData[0].Date,
    
  };  
  this.setState({ status:curr_status });  
  console.log(this.state.status);
}}
  render() {
    return (
      <div id="home" className = "page-element" >
        <Navbar/>
        <div class="wrap">
        <hr/>
          <div class="Loader" style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
            <HashLoader size={30} color={"#84EDB4"} loading={this.state.loading} />
          </div>
          <div class="Loader">
            {this.state.loading ? <div style={{ display: "flex", justifyContent: "center", margin: "20px", fontFamily: "'Cinzel', serif" }}><p> Loading... </p></div> : ""}
          </div>
          <div className="App">
            <div id= "cards" class = "col-12">
              <CountryCards status = {this.state.status}/>
            </div>
            <div >
                <ChooseCountry data={this.state.countries}  handleCountryChange={this.handleCountryChange}/>
            </div>
            <div id= "charts" className = "col-12 WorldChart">
              <WorldChart status = {this.state.status} />
            </div>
            <div id="maps">
              <WorldMap Countries={this.state.countries} />
            </div>
            <div id="about" class = "col-12">
              <About/>
            </div>
            {/* <div class="col-12" id="charts" className="choose-form">
              <div>
                <WorldChart status={this.state.status} country={this.state.pickedCountry} />
              </div>
            </div>  */}
            <div class="col-12" id="table">
              <CountryTable countries={this.state.countries}/>           
            </div>                 
          </div> 
        </div>
        
      </div>
     
    );
  }
}
export default World;


