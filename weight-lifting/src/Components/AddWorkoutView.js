import React, { useState } from 'react';
import styled from 'styled-components';

// Have to pull in Personal Record component
// Have to map over 'Exercises'

const AddWorkoutView = () => {
  const [addSet, setAddSet] = useState({
    weight: '',
    sets: ''
  });

  const changeHandler = e => {
    setAddSet({ ...addSet, [e.target.name]: e.target.value });
  };

  return (
    <Wrapper>
      {/* Placeholder for Navbar */}
      <h3>This is our Navbar</h3>
      {/* Input field to add sets */}
      <form>
        <Input
          name='weight'
          type='text'
          placeholder='input weight'
          value={addSet.weight}
          onChange={changeHandler}
        />
        <Input
          name='sets'
          type='text'
          placeholder='add sets'
          value={addSet.sets}
          onChange={changeHandler}
        />
      </form>
      <AddButton>Add Set</AddButton>
      {/* Link to the next page */}
      <Button>Start Exercise →</Button>
    </Wrapper>
  );
};

export default AddWorkoutView;

// All of our styled components
const AddButton = styled.button`
  background-color: darkgrey;
  color: gold;
  border: 2px solid gold;
  padding: 1.3rem;
  font-weight: bold;
  font-size: 1.3rem;
  &:hover {
    background-color: gold;
    color: darkgrey;
  }
`;

const Button = styled.button`
  position: fixed;
  opacity: 0.8;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: red;
  color: white;
  text-align: center;
  padding: 1.2rem;
  font-size: 1.5rem;
  &:hover {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  background: darkgrey;
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

const Input = styled.input``;
