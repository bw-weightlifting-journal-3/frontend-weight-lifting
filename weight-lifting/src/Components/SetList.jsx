import React, { useEffect, useState, useContext } from "react";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import SetCard from "./SetCard";
import inputFieldContext from "../Context/UserContext";

const SetList = props => {
  //global State
  const { inputField, setinputField, changeHandler } = useContext(
    inputFieldContext
  );

  const [setInfo, setSetInfo] = useState();

  useEffect(() => {
    AxiosWithAuth()
      .get(`api/exercises/${props.match.params.id}/sets`)
      .then(res => {
        console.log("res", res);
        setSetInfo(res.data);
      })
      .catch(err => {
        console.log("this is error 1", err);
      });
    setinputField({
      reps: "",
      weight: ""
    });
  }, [setSetInfo]);

  const exerciseDelete = e => {
    e.preventDefault();
    AxiosWithAuth()
      .delete(`/api/exercises/${props.match.params.id}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log("this is error 2", err);
      });
  };

  const submitHandler = e => {
    e.preventDefault();
    AxiosWithAuth()
      .post(`/api/exercises/${props.match.params.id}/sets`, inputField)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log("this is error 3", err);
      });
  };

  return (
    <div>
      <h1>{props.location.state.name}</h1>
      <form onSubmit={submitHandler}>
        <div>
          <input
            name="reps"
            type="number"
            placeholder="reps"
            value={inputField.reps}
            onChange={changeHandler}
          />
          <input
            name="weight"
            type="number"
            placeholder="weight"
            value={inputField.weight}
            onChange={changeHandler}
          />
          <button type="submit"> Add Set</button>
        </div>
      </form>

      {setInfo
        ? setInfo.map(cv => {
            return (
              <SetCard
                data={cv}
                global={{ inputField, changeHandler }}
                key={cv.id}
              />
            );
          })
        : "You have done nothing"}

      <button onClick={exerciseDelete}>I delete Everyting You See</button>
    </div>
  );
};

export default SetList;
