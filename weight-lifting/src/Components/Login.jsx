import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Login = () => {
  const [inputField, setInputField] = useState({
    email: '',
    password: ''
  });

  const changeHandler = e => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };

  const SubmitHandler = e => {
    e.preventDefault();
    axios
      .post(
        'https://bw-weightlifting-journal.herokuapp.com/api/login',
        inputField
      )
      .then(res => {
        localStorage.setItem('token', res.data.token);
        console.log('token res', res);
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  return (
    <Wrapper>
      <Header>Login and get lifting!</Header>
      <form onSubmit={SubmitHandler}>
        <StyledInput
          name='email'
          type='text'
          placeholder='E-mail'
          value={inputField.email}
          onChange={changeHandler}
        />
        <br />
        <StyledInput
          name='password'
          type='password'
          placeholder='Password'
          value={inputField.password}
          onChange={changeHandler}
        />
        <br />

        <StyledButton typeof='submit'>LogIn 🏋️‍</StyledButton>
      </form>
    </Wrapper>
  );
};

export default Login;

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
