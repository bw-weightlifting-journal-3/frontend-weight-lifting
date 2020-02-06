import React, { useEffect, useState } from "react";
// import ExerciseCard from "./ExerciseCard";
import axiosWithAuth from "../utils/AxiosWithAuth";
import ExerciseCard from "./ExerciseCard";

const ExerciseList = props => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("api/user")
      .then(res => {
        setExercises(res.data.exercises);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          console.log(exercises);
        }}
      ></button>
      {exercises
        ? exercises.map(cv => {
            return <ExerciseCard data={cv} sets={cv.sets} key={cv.id} />;
          })
        : "You have done nothing"}
    </div>
  );
};
export default ExerciseList;
