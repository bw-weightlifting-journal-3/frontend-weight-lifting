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
      <Header style={{ color: 'red' }}>Sign Up</Header>
      <StyledForm onSubmit={SubmitHandler}>
        <StyledInput
          name='name'
          type='text'
          placeholder='Your Name'
          value={credentials.name}
          onChange={changeHandler}
        />
        <br />
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
        <StyledButton typeof='submit'>Sign Up🏋️‍</StyledButton>
      </StyledForm>
    </Wrapper>
  );
};

export default SignUp;

const Header = styled.h3`
  background-color: black;
  color: 'red';
  margin: auto;
  padding: 0.5em;
  border-radius: 10px;

  @media (min-width: 500px) {
    width: 80%;
  }

  @media (min-width: 750px) {
    width: 50%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledForm = styled.form`
  width: 40%;
  margin: auto;
  background: none;
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  margin: 0.5rem;
  padding: 0.3rem;
  border-radius: 10px;
  border: none;
  font-weight: bold;
  font-size: 1.2rem;
`;

const StyledButton = styled.button`
  background: black;
  color: white;
  border-radius: 10px;
  padding: 1.1em;
  font-weight: bold;
  letter-spacing: 0.1em;
  border: none;
  margin-top: 0.5em;
  width: 80%;
  &:hover {
    background: white;
    color: black;
  }

  @media (min-width: 500px) {
    width: 140px;
  }
`;
