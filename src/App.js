import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Signings from './pages/logins/signings.jsx';
// import logo from './logo.svg';
import './App.css';

// HomePage is route number one
// Birds is number 2, and BirdsDeets is a third nested route
// const BirdsPage = (props) => {
//     console.log('log', props);
//     return (
//     <div className="center-page">
//       <h1>Birds Page </h1>
//     </div>  
//   )
// }

// const BirdsDeets = () => (
//   <div className="center-page">
//     <h1>Details about Birds </h1>
//   </div> 
// )

// switch renders only one route at a time 
function App() {
  return (
    // <div className="app-wrapper"> see #root in index
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={Signings} />
      </Switch>
    </div>
  );
}

export default App;



// <Switch>
// <Route exact path='/' component={HomePage} />
// <Route path='/birds' component={BirdsPage} />
// <Route path='/birds/:deets' component={BirdsDeets} />
// </Switch>