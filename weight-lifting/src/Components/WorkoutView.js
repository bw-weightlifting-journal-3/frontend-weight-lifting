import React from 'react';
import styled from 'styled-components';

// Have to pull in Personal Record component
// Have to map over 'Exercises'

const WorkoutView = () => {
  return (
    <Wrapper>
      {/* Placeholder for Navbar */}
      {/* Bring in Personal Record Component */}
      <Header>Worked out Today</Header>
      {/* Map over workouts created */}

      {/* Link to the next page */}
      <Button>Start Exercise → </Button>
    </Wrapper>
  );
};

export default WorkoutView;

// All of our styled components
const Button = styled.button`
  display: flex;
  margin-top: 90%;
  background: black;
  color: yellow;
`;

const Wrapper = styled.div`
  background: black;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
`;

const Header = styled.h3`
  color: white;
  text-align: left;
  padding: 1.2rem;
`;
