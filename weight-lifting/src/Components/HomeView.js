import React, { useState } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../App.css';
import styled from 'styled-components';
import PersonalRecord from './PersonalRecord';

// Have to pull in Personal Record component
// Have to map over 'Exercises'

import ExerciseList from './ExerciseList';
import SetList from './SetList';

import Arrow from '../assets/arrow.svg';

const HomeView = () => {
  return (
    <div className='master_container'>
      <Wrapper>
        <PersonalRecord />
        {/* Map over workouts created */}

        <ExerciseList />

        {/* Link to the next page */}
        <Button>
          Start Exercise <img src={Arrow} alt='arrow icon' />{' '}
        </Button>
      </Wrapper>
    </div>
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
