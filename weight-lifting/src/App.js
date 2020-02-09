import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

// importing Nav / views

import Navigation from './Components/Navigation';
import HomeView from './Components/HomeView';
import AddWorkoutView from './Components/AddWorkoutView';
import DetailsView from './Components/DetailsView';
import Credentials from './Components/Credentials';
import UserPage from './Components/UserPage'

// importing Private Route
import PrivateRoute from "./Components/PrivateRoute";
import SetList from "./Components/SetList";

function App() {
  //global State
  const [inputField, setinputField] = useState({
    reps: "",
    weight: ""
  });
  const changeHandler = e => {
    setinputField({ ...inputField, [e.target.name]: e.target.value });
  };

  return (
    <div>

      <InputFieldContext.Provider
        value={{ inputField, setinputField, changeHandler }}
      >
        <Router>
          <Navigation />
          <Route exact path="/" component={Credentials} />
          <PrivateRoute exact path="/home" component={HomeView} />
          <Route path="/exercises/:id" component={SetList} />
          <PrivateRoute exact path="/add" component={AddWorkoutView} />
          <PrivateRoute exact path='/userinfo' component={UserPage} />
        </Router>
      </InputFieldContext.Provider>
    </div>
  );
}
export default App;
