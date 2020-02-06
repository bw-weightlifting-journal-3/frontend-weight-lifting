import React, { useEffect, useState } from "react";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import SetCard from "./SetCard";

const SetList = props => {
  const [setInfo, setSetInfo] = useState();
  const [titleUpdate, setTitleUpdate] = useState(false);

  useEffect(() => {
    AxiosWithAuth()
      .get(`api/exercises/${props.match.params.id}/sets`)
      .then(res => {
        console.log("res", res);
        setSetInfo(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>{props.location.state.name}</h2>
      {setInfo
        ? setInfo.map(cv => {
            return <SetCard data={cv} key={cv.id} />;
          })
        : "You have done nothing"}
    </div>
  );
};

export default SetList;
