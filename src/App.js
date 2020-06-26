import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from './Head';
import Home from './Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import World from './World'


export default function App(){
  return(
    <div>
    <Router>
    <Head/>
      <Switch>
          <Route path="/" exact component = {Home} />
          <Route path="/World" exact component = {World} />
      </Switch>
    </Router>
    </div> 
  );
};