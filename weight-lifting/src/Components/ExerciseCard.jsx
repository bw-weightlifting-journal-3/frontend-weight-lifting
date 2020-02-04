import React from "react";
import Arrow from "../assets/arrow.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const ExerciseCard = props => {
  // console.log(props.sets);
  return (
    <Link to={`/exercies/${props.data.id}`}>
      <div>
        <h2>{props.data.name}</h2>
        <p>{props.sets}</p>
      </div>
      <img src={Arrow} alt="arrow icon" />
    </Link>
  );
};
export default ExerciseCard;
