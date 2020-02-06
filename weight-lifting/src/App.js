import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./login";
// import ExerciseList from "./Components/ExerciseList";
import PersonalRecord from "./Components/PersonalRecord"


// update
import HomeView from './Components/HomeView';
import AddWorkoutView from './Components/AddWorkoutView';

function App() {
  return (
    <div className='App'>

      <h1>Hello from App :D</h1>

      <h1>Hello from App</h1>
      <PersonalRecord/>

      <Router>
        <Route exact path='/login' component={Login} />
      </Router>
      {/* <HomeView /> */}
      <AddWorkoutView />
    </div>
  );
}

export default App;
