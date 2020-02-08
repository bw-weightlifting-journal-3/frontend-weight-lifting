import React, { useState } from "react";
import delete_red from "../assets/delete_red.svg";

const WorkoutSetCard = props => {
  return (
    <div>
      <h2>
        {props.data.weight}lbs for {props.data.reps} reps
      </h2>
      <button onClick="">
        <img src={delete_red} alt="red delete icon" />
      </button>
    </div>
  );
};
export default WorkoutSetCard;
