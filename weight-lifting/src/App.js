import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./login";
// import ExerciseList from "./Components/ExerciseList";
function App() {
  return (
    <div className='App'>
      <h1>Hello from App</h1>
      <Router>
        <Route exact path="/login" component={Login} />
      </Router>
      <WorkoutView />

    </div>
  );
}

export default App;
