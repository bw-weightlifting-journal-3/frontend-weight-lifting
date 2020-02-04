
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./login";
// import WorkoutView from "./Components/WorkoutView";
import ExerciseList from "./Components/ExerciseList";
import SetList from "./Components/SetList";

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './login';
// import ExerciseList from "./Components/ExerciseList";

// update
import HomeView from './Components/HomeView';
import AddWorkoutView from './Components/AddWorkoutView';


function App() {
  return (
    <div className='App'>
      <h1>Hello from App :D</h1>

      <h1>Hello from App</h1>
      <Router>

        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={ExerciseList} />
        <Route path="/exercies/:id" component={SetList} />
      </Router>
      {/* <WorkoutView /> */}

        <Route exact path='/login' component={Login} />
      </Router>
      {/* <HomeView /> */}
      <AddWorkoutView />
    </div>
  );
}

export default App;
