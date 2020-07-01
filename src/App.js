import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from './Head';
import Home from './Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import World from './World';
import Footer from './Footer'

export default function App(){
  return(
    <div style={{display:"flex",flexDirection:"column",minHeight:"100vh"}}>
      <div style={{flex: "1"}}>
    <Router>
    <Head/>
      <Switch>
        
          <Route path="/" exact component = {Home} />
          <Route path="/World" exact component = {World} />

      </Switch>
    </Router>
    </div>
    <Footer/>
    </div> 
  );
};