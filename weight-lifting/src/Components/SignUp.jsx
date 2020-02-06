import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: ''
  });

  const changeHandler = e => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const SubmitHandler = e => {
    e.preventDefault();
    axios
      .post(
        'https://bw-weightlifting-journal.herokuapp.com/api/register',
        userInfo
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  return (
    <Wrapper>
      <StyledForm onSubmit={SubmitHandler}>
        <StyledInput
          name='name'
          type='text'
          placeholder='Your Name'
          value={userInfo.name}
          onChange={changeHandler}
        />
        <StyledInput
          name='email'
          type='text'
          placeholder='Your E-mail'
          value={userInfo.email}
          onChange={changeHandler}
        />
        <br />
        <StyledInput
          name='password'
          type='password'
          placeholder='Your Password'
          value={userInfo.password}
          onChange={changeHandler}
        />
        <br />
        <StyledButton type='submit'>Sign-Up🏋️‍</StyledButton>
      </StyledForm>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledForm = styled.form`
  width: 40%;
  margin: auto;
  background: none;
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
  &:hover {
    background: white;
    color: black;
  }
`;
