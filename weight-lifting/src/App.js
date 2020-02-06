
import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./login";
import { UserContext } from "./Context/UserContext";
import ExerciseList from "./Components/ExerciseList";

// update
import HomeView from "./Components/HomeView";
import AddWorkoutView from "./Components/AddWorkoutView";
import SetList from "./Components/SetList";
import DetailsView from './Components/DetailsView';

function App() {
  const value = useContext(UserContext);

  console.log('This be da userName', value);
  return (
    <div className='App'>
      <UserContext.Provider value={value}>
        <h1>Hello from App :D</h1>
        <Router>

          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={ExerciseList} />
          <Route exact path="/exercies/:id" component={SetList} />
        </Router>
        {/* <HomeView /> */}
        {/* <AddWorkoutView /> */}
    {/*<DetailsView /> */}

      </UserContext.Provider>
    </div>
  );
}
export default App;
