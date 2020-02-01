import React from "react";
import Arrow from "../assets/arrow.svg";

const ExerciseCard = props => {
  return (
    <div>
      <div>
        <h2>{props.data.exercise}</h2>
        <p>
          {props.data.sets}Sets | {props.data.focus}
        </p>
      </div>
      <img src={Arrow} alt="arrow icon" />
    </div>
  );
};
export default ExerciseCard;
