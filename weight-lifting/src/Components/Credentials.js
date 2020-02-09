import React from 'react';
import styled from 'styled-components';
import Login from './Login';
import SignUp from './SignUp';

const Credentials = () => {
  return (
    <Wrapper>
      <Login />
      <SignUp />
    </Wrapper>
  );
};

export default Credentials;

const Wrapper = styled.div`
  max-width: 500px;
  margin: auto;
`


