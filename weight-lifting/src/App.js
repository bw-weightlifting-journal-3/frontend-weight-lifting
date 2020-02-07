import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

// importing Nav / views
import Navigation from './Components/Navigation';
import HomeView from './Components/HomeView';
import AddWorkoutView from './Components/AddWorkoutView';
import DetailsView from './Components/DetailsView';
import Credentials from './Components/Credentials';
// importing Private Route
import PrivateRoute from './Components/PrivateRoute';

function App() {
  //global State

  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path='/' component={Credentials} />
        <PrivateRoute exact path='/home' component={HomeView} />
        <PrivateRoute exact path='/add' component={AddWorkoutView} />
        <PrivateRoute exact path='/details' component={DetailsView} />
      </Switch>
    </div>
  );
}
export default App;
