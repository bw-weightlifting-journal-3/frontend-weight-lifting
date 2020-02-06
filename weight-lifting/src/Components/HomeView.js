import React, { useState } from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Have to pull in Personal Record component
// Have to map over 'Exercises'

import ExerciseList from "./ExerciseList";
import SetList from "./SetList";
import InputFieldContext from "../Context/UserContext";
import Arrow from "../assets/arrow.svg";

const HomeView = () => {
  const changeHandler = e => {
    setinputField({ ...inputField, [e.target.name]: e.target.value });
  };

  const [inputField, setinputField] = useState({
    reps: "",
    weight: ""
  });
  return (
    <Wrapper>
      {/* Placeholder for Navbar */}
      <Navigation />
      {/* Bring in Personal Record Component */}
      <h3>This is our Personal Record Component</h3>
      <Header>Worked out Today</Header>
      {/* Map over workouts created */}

      <InputFieldContext.Provider
        value={{ inputField, setinputField, changeHandler }}
      >
        <Router>
          <Route exact path="/" component={ExerciseList} />
          <Route exact path="/exercies/:id" component={SetList} />
        </Router>
      </InputFieldContext.Provider>

      {/* Link to the next page */}
      <Button>
        Start Exercise <img src={Arrow} alt="arrow icon" />{" "}
      </Button>
    </Wrapper>
  );
};

export default HomeView;

// All of our styled components
const Button = styled.button`
  position: fixed;
  opacity: 0.8;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: black;
  color: #ffc000;
  text-align: center;
  padding: 1.2rem;
  font-size: 22px;
  font-weight: bold;
  border: none;
`;

const Wrapper = styled.div`
  background: #333;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  color: white;
`;

const Header = styled.h3`
  color: white;
  text-align: left;
  padding: 1.2rem;
`;
