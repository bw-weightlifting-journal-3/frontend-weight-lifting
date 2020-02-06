import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./login";

import HomeView from "./Components/HomeView";
import AddWorkoutView from "./Components/AddWorkoutView";

import DetailsView from "./Components/DetailsView";

function App() {
  //global State

  return (
    <div>
      <Router>
        <Route exact path="/login" component={Login} />
        <Route exact path="/addworkout" component={AddWorkoutView} />
        <Route exact path="/" component={HomeView} />
      </Router>
      {/* <AddWorkoutView /> */}
      {/*<DetailsView /> */}
    </div>
  );
}
export default App;
