import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const SignUp = props => {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: ''
  });

  const changeHandler = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // post request to add user to the server
  const SubmitHandler = e => {
    e.preventDefault();
    axios
      .post(
        'https://bw-weightlifting-journal.herokuapp.com/api/register',
        credentials
      )
      .then(res => {
        localStorage.setItem('token', res.data.token);

        console.log('our signup', res);
        console.log('This be da token', res.data.token);
      })
      .catch(err => {
        console.log('err', err);
      });
    setCredentials({
      name: '',
      email: '',
      password: ''
    });
  };

  return (
    <Wrapper>
      <Header>Sign up and get at it!</Header>
      <form onSubmit={SubmitHandler}>
        <StyledInput
          name='name'
          type='text'
          placeholder='Your Name'
          value={credentials.name}
          onChange={changeHandler}
        />
        <StyledInput
          name='email'
          type='text'
          placeholder='Your E-mail'
          value={credentials.email}
          onChange={changeHandler}
        />
        <br />
        <StyledInput
          name='password'
          type='password'
          placeholder='Your Password'
          value={credentials.password}
          onChange={changeHandler}
        />
        <br />
        <StyledButton type='submit'>Sign-Up🏋️‍</StyledButton>
      </form>
    </Wrapper>
  );
};

export default SignUp;

const Header = styled.h3`
  padding: 1rem;
  font-weight: bold;
  border-bottom: 1px solid red;
`;

const Wrapper = styled.div`
  margin: 1rem;
  padding: 2rem;
  background: white;
  border: 2px solid black;
  border-radius: 5px;
  box-shadow: 8px 8px red;
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 5px;
`;

const StyledButton = styled.button`
  background: black;
  color: white;
  border-radius: 10px;
  padding: 0.5rem;
  font-weight: bold;
  letter-spacing: 0.1em;
  border: none;
  &:hover {
    background: white;
    color: black;
    border: 2px solid black;
  }
`;
