import React, { useEffect, useState, useContext } from "react";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import SetCard from "./SetCard";
import inputFieldContext from "../Context/UserContext";

const SetList = props => {
  console.log("using setlist");
  //global State
  const { inputField, setinputField, changeHandler } = useContext(
    inputFieldContext
  );
  const [setInfo, setSetInfo] = useState([]);

  const addChangeHandler = e => {
    setAddSet({ ...addSet, [e.target.name]: e.target.value });
  };

  const [addSet, setAddSet] = useState({
    reps: "",
    weight: ""
  });

  function getSetBois() {
    AxiosWithAuth()
      .get(`api/exercises/${props.match.params.id}/sets`)
      .then(res => {
        console.log("setListRes", res);
        setSetInfo(res.data);
      })
      .catch(err => {
        console.log("this is error 1", err);
      });
  }
  useEffect(() => {
    getSetBois();
  }, []);

  const exerciseDelete = e => {
    e.preventDefault();
    AxiosWithAuth()
      .delete(`/api/exercises/${props.match.params.id}`)
      .then(res => {
        console.log(res);
        getSetBois();
      })
      .catch(err => {
        console.log("this is error 2", err);
      });
  };

  const submitHandler = e => {
    e.preventDefault();
    AxiosWithAuth()
      .post(`/api/exercises/${props.match.params.id}/sets`, addSet)
      .then(res => {
        console.log(res);
        getSetBois();
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
            value={addSet.reps}
            onChange={addChangeHandler}
          />
          <input
            name="weight"
            type="number"
            placeholder="weight"
            value={addSet.weight}
            onChange={addChangeHandler}
          />
          <button type="submit"> Add Set</button>
        </div>
      </form>

      {setInfo
        ? setInfo.map(cv => {
            return (
              <SetCard
                setBois={() => {
                  getSetBois();
                }}
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
