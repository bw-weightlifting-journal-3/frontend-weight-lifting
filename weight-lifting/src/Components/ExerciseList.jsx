import React, { useEffect } from "react";
// import ExerciseCard from "./ExerciseCard";
import axiosWithAuth from "../utils/AxiosWithAuth";

const ExerciseList = props => {
  useEffect(() => {
    axiosWithAuth()
      .get("api/exercises")
      .then(res => {
        console.log("exercises", res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {/* {props.data
        ? props.data.map(cv => {
            return <ExerciseCard data={cv} key={cv.id} />;
          })
        : "You have done nothing"} */}
    </div>
  );
};
export default ExerciseList;
