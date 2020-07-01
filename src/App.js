import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from './Head';
import Home from './Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import World from './World';
import News from './components/News';
import Business from './components/Business'
import Entertainment from './components/Entertainment'
import Health from './components/Health'
import Science from './components/Science'
import Sports from './components/Sports'
import Technology from './components/Technology'
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
          <Route path="/News" exact component = {News} />
          <Route path="/News/Business" exact component = {Business} />
          <Route path="/News/Entertainment" exact component = {Entertainment} />
          <Route path="/News/Health" exact component = {Health} />
          <Route path="/News/Sports" exact component = {Sports} />
          <Route path="/News/Science" exact component = {Science} />
          <Route path="/News/Technology" exact component = {Technology} />
          
      </Switch>
    </Router>
    </div>
    <Footer/>
    </div> 
  );
};