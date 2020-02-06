
import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./login";
import { UserContext } from "./Context/UserContext";
import Navigation from "./Components/Navigation";
// import ExerciseList from "./Components/ExerciseList";

import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './login';
import { UserContext } from './Context/UserContext';
import ExerciseList from './Components/ExerciseList';


// update
import HomeView from './Components/HomeView';
import AddWorkoutView from './Components/AddWorkoutView';
import SetList from './Components/SetList';
import DetailsView from './Components/DetailsView';
import SignUp from './Components/SignUp';
function App() {
  const value = useContext(UserContext);

  console.log('This be da userName', value);
  return (
    <div className='App'>
      <UserContext.Provider value={value}>

        <Navigation />
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={HomeView} />
        <Route exact path='/addworkout' component={AddWorkoutView} />
        <Route exact path='/detailsview' component={DetailsView} />
        <DetailsView />

        <h1>Hello from App :D</h1>
        <Router>
          <Route exact path='/login' component={Login} />
          <Route exact path='/' component={ExerciseList} />
          <Route exact path='/exercies/:id' component={SetList} />
          <Route exact path='/signup' component={SignUp} />
        </Router>
        {/* <HomeView /> */}
        {/* <AddWorkoutView /> */}
        {/*<DetailsView /> */}

      </UserContext.Provider>
    </div>
  );
}
export default App;
