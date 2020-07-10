import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
// import logo from './logo.svg';
import './App.css';

// HomePage is route number one
// Hats is number 2, and HatsDeets is a third nested route
const HatsPage = (props) => {
    console.log('log', props);
    return (
    <div className="center-page">
      <h1>Hats Page </h1>
    </div>  
  )
}

const HatsDeets = () => (
  <div className="center-page">
    <h1>Details about Hats </h1>
  </div> 
)

// switch renders only one route at a time 
function App() {
  return (
    <div className="App-wrapper">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
        <Route path='/hats/:deets' component={HatsDeets} />
      </Switch>
    </div>
  );
}

export default App;
