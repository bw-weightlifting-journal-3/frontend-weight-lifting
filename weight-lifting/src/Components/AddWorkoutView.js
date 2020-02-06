import React, { useState } from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

// Have to map over 'Sets'

const AddWorkoutView = () => {
  const [addSet, setAddSet] = useState({
    weight: '',
    sets: ''
  });

  const changeHandler = e => {
    setAddSet({ [e.target.name]: e.target.value });
  };

  const SubmitHandler = e => {
    e.preventDefault();
    setAddSet({
      weight: '',
      sets: ''
    });
  };

  return (
    <Wrapper>
      {/* Input field to add sets */}
      <Form onSubmit={SubmitHandler}>
        <OuterDiv>
          <DivLeft>
            <h3>Weight</h3>
            <Input
              name='weight'
              type='text'
              placeholder='input weight'
              value={addSet.weight}
              onChange={changeHandler}
            />
          </DivLeft>
          <DivRight>
            <h3>Sets</h3>
            <Input
              name='sets'
              type='text'
              placeholder='add sets'
              value={addSet.sets}
              onChange={changeHandler}
            />
          </DivRight>
        </OuterDiv>
        
        
        <AddButton type='submit'>Add Set</AddButton>
      </Form>
    {/* Our sets will go here */}
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

const Input = styled.input`
  text-align: center;
  margin: 1.3rem;
  background: white;
  border: none;
  color: black;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  // background-color: black;
`;

const OuterDiv = styled.div`
  
`

const DivLeft = styled.div`
  @media (min-width: 500px) {
    background-color: black;
    width: 500px;
  }

  @media (min-width: 750px) {
    width: 100%;
  }
  
`

const DivRight = styled.div`
  @media (min-width: 500px) {
    background-color: black;
    width: 500px;
  }

  @media (min-width: 750px) {
    width: 100%;
  }
`