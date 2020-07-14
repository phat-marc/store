import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
// import logo from './logo.svg';
import './App.css';

// HomePage is route number one
// Birds is number 2, and BirdsDeets is a third nested route
const BirdsPage = (props) => {
    console.log('log', props);
    return (
    <div className="center-page">
      <h1>Birds Page </h1>
    </div>  
  )
}

const BirdsDeets = () => (
  <div className="center-page">
    <h1>Details about Birds </h1>
  </div> 
)

// switch renders only one route at a time 
function App() {
  return (
    <div className="App-wrapper">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/birds' component={BirdsPage} />
        <Route path='/birds/:deets' component={BirdsDeets} />
      </Switch>
    </div>
  );
}

export default App;
