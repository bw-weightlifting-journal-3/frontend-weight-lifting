import React, { useEffect, useState } from "react";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import SetCard from "./SetCard";

const SetList = props => {
  const [sets, setSets] = useState();

  useEffect(() => {
    AxiosWithAuth()
      .get(`api/exercises/${props.match.params.id}/sets`)
      .then(res => {
        console.log("res", res);
        setSets(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>{props.match.params.id}</h2>
      {sets
        ? sets.map(cv => {
            return <SetCard data={cv} key={cv.id} />;
          })
        : "You have done nothing"}
    </div>
  );
};

export default SetList;
