import React, { useState } from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

// Have to map over 'Sets'

const DetailsView = () => {
  return (
    <Wrapper>
      <Navigation />
      <h1>Placeholder: Name of Set</h1>
      <h3>Placeholder: Set card</h3>
      <h3>Placeholder: Set card</h3>
      <h3>Placeholder: Set card</h3>
      <h3>Placeholder: Set card</h3>
      <h3>Placeholder: Average (stretch?)</h3>
      <Button>Delete Exercise X</Button>
    </Wrapper>
  );
};

export default DetailsView;

// All of our styled components

const Wrapper = styled.div`
  background: darkgrey;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  color: white;
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
