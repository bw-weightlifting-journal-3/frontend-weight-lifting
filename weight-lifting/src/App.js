import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./login";
import InputFieldContext from "./Context/UserContext";

// update
import HomeView from "./Components/HomeView";
import AddWorkoutView from "./Components/AddWorkoutView";

import DetailsView from "./Components/DetailsView";

function App() {
  //global State

  return (
    <div className="master_container">
      <Router>
        <Route exact path="/login" component={Login} />
      </Router>
      <HomeView />
      {/* <AddWorkoutView /> */}
      {/*<DetailsView /> */}
    </div>
  );
}
export default App;
