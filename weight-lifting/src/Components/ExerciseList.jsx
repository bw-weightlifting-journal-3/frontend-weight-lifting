import React from "react";
import ExerciseCard from "./ExerciseCard";

const ExerciseList = props => {
  return (
    <div>
      {props.data
        ? props.data.map(cv => {
            return <ExerciseCard data={cv} key={cv.id} />;
          })
        : "You have done nothing"}
    </div>
  );
};
export default ExerciseList;
