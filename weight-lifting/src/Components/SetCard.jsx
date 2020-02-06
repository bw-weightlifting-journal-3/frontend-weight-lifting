import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/AxiosWithAuth";
import { withRouter } from "react-router-dom";

const SetCard = props => {
  const [inputField, setinputField] = useState({
    reps: props.data.reps,
    weight: props.data.weight
  });
  const [editing, setEditing] = useState(false);

  const toggler = () => {
    setEditing(!editing);
  };

  const changeHandler = e => {
    setinputField({ ...inputField, [e.target.name]: e.target.value });
  };
  const submitHandler = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(
        `/api/exercises/${props.match.params.id}/sets/${props.data.id}`,
        inputField
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const deleteHandler = e => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`/api/exercises/${props.match.params.id}/sets/${props.data.id}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  ///api/exercises/:id/sets/:set_id

  return (
    <div>
      <h2>
        {props.data.reps} reps for {props.data.weight}lbs
      </h2>
      <button onClick={toggler}>{editing ? "Cancel" : "Edit"}</button>
      <button onClick={deleteHandler}>X</button>
      <form onSubmit={submitHandler} className={editing ? "show" : "hidden"}>
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
        <button>Update</button>
      </form>
    </div>
  );
};

export default withRouter(SetCard);
