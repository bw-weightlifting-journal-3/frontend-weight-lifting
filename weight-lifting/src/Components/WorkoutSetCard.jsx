import React, { useState } from "react";
import delete_red from "../assets/delete_red.svg";
import styled from 'styled-components';

const WorkoutSetCard = props => {
  return (
    <Wrapper>
      <h2>
        {props.data.weight}lbs / {props.data.reps} reps
      </h2>
      <button onClick="">
        <img src={delete_red} alt="red delete icon" />
      </button>
    </Wrapper>
  );
};
export default WorkoutSetCard;

const Wrapper = styled.div`
background: black;
text-align: center;
`

const Header = styled.h2`
  text-align: center;
  padding: 1rem;
`
