import React, { useState } from 'react';
import axiosWithAuth from '../utils/AxiosWithAuth';
import { withRouter } from 'react-router-dom';
import delete_red from '../assets/delete_red.svg';

const SetCard = props => {
  //global State
  const [editing, setEditing] = useState(false);
  const toggler = () => {
    setEditing(!editing);
  };
  const submitHandler = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(
        `/api/exercises/${props.match.params.id}/sets/${props.data.id}`,
        props.global.inputField
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

  //api/exercises/:id/sets/:set_id

  return (
    <div>
      <h2>
        {props.data.reps} reps for {props.data.weight}lbs
      </h2>

      <form onSubmit={submitHandler}>
        <input
          className={editing ? 'show' : 'hidden'}
          name='reps'
          type='number'
          placeholder='reps'
          value={props.global.inputField.reps}
          onChange={props.global.changeHandler}
        />
        <input
          className={editing ? 'show' : 'hidden'}
          name='weight'
          type='number'
          placeholder='weight'
          value={props.global.inputField.weight}
          onChange={props.global.changeHandler}
        />
        <button onClick={toggler}>{editing ? 'Cancel' : 'Edit'}</button>
        <button onClick={deleteHandler}>
          <img src={delete_red} alt='red delete icon' />
        </button>
        <button type='submit' className={editing ? 'show' : 'hidden'}>
          Update
        </button>
      </form>
    </div>
  );
};

export default withRouter(SetCard);
