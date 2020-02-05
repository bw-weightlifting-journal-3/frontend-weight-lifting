import React, { useEffect, useState } from "react";
// import ExerciseCard from "./ExerciseCard";
import axiosWithAuth from "../utils/AxiosWithAuth";
import ExerciseCard from "./ExerciseCard";

const ExerciseList = props => {
  const [exercises, setExercises] = useState();
  const [setLength, setSetLength] = useState();
  useEffect(() => {
    axiosWithAuth()
      .get("api/user")
      .then(res => {
        console.log("Please work", res.data.exercises.sets);
        setExercises(res.data.exercises);
        // setSets(res.data.exercise.sets);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {exercises
        ? exercises.map(cv => {
            return <ExerciseCard data={cv} key={cv.id} />;
          })
        : "You have done nothing"}
    </div>
  );
};
export default ExerciseList;
