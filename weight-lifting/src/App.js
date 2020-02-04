import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './login';
import { UserContext } from './Context/UserContext';
// import ExerciseList from "./Components/ExerciseList";

// update
import HomeView from './Components/HomeView';
import AddWorkoutView from './Components/AddWorkoutView';

function App() {
  const value = useContext(UserContext);
  console.log('This be da value', value);

  return (
    <UserContext.Provider value={value}>
      <div className='App'>
        <h1>Hello from App :D</h1>

        <h1>Hello from App</h1>
        <Router>
          <Route exact path='/login' component={Login} />
        </Router>
        {/* <HomeView /> */}
        <AddWorkoutView />
      </div>
    </UserContext.Provider>
  );
}

export default App;
