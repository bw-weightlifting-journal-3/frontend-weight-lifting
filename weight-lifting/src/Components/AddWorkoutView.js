import React, { useState } from 'react';
import styled from 'styled-components';
import AxiosWithAuth from '../utils/AxiosWithAuth';
import WorkoutSetCard from './WorkoutSetCard';

// Have to map over 'Sets'

const AddWorkoutView = () => {
  const [title, setTitle] = useState({
    name: '',
    region_id: '1',
    timestamp: Date.now()
  });
  const titleHandler = e => {
    setTitle({ ...title, [e.target.name]: e.target.value });
  };

  const [addSet, setAddSet] = useState({
    weight: 0,
    reps: 0
  });

  const [allSets, setAllSets] = useState([]);

  const changeHandler = e => {
    setAddSet({ ...addSet, [e.target.name]: e.target.value });
  };

  const SubmitHandler = e => {
    e.preventDefault();
    AxiosWithAuth()
      .post('api/exercises', title)
      .then(res => {
        console.log('post Res', res);
        allSets.forEach(cv => {
          AxiosWithAuth()
            .post(`api/exercises/${res.data.id}/sets`, cv)
            .then(result => {
              console.log('result', result);
            })
            .catch(err => {
              console.log('This is error', err);
            });
        });
      });

    console.log('title', title);
    console.log('allSets', allSets);
  };

  const newSet = e => {
    e.preventDefault();
    setAllSets([...allSets, addSet]);
    setAddSet({ weight: 0, reps: 0 });
  };

  return (
    <Wrapper>
      <button style={hideButton}
        onClick={() => {
          console.log('allSets', allSets);
        }}>
        State{' '}
      </button>
      <Header2>Log your workout:</Header2>
      <Header>Lift type</Header>
      <form onSubmit={''}>
        <StyledInput
          name='name'
          type='text'
          placeholder='Barbell Curls'
          value={title.name}
          onChange={titleHandler}
        />
        <div>
          <div>
            <Header>Weight</Header>
            <StyledInput
              name='weight'
              type='text'
              placeholder='input weight'
              value={addSet.weight}
              onChange={changeHandler}
            />
          </div>
          <div>
            <Header>Reps</Header>
            <StyledInput
              name='reps'
              type='text'
              placeholder='add Reps'
              value={addSet.reps}
              onChange={changeHandler}
            />
          </div>
        </div>

        <StyledButton onClick={newSet}>Add Sets</StyledButton>
      </form>

      {allSets
        ? allSets.map(cv => {
            return <WorkoutSetCard data={cv} key={cv.id} />;
          })
        : 'You have done nothing'}

      <StyledButton onClick={SubmitHandler}> End Exercise</StyledButton>
    </Wrapper>
  );
};

export default AddWorkoutView;

const hideButton = {
  display: 'none'
};

const Wrapper = styled.div`
  margin: 1rem auto;
  max-width: 500px;
  padding: 2rem;
  background: white;
  border: 2px solid black;
  border-radius: 5px;
  box-shadow: 8px 8px red;
`;

const Header = styled.h3`
  padding: 1rem;
  font-weight: bold;
`;
const Header2 = styled.h3`
  padding: 1rem;
  font-weight: bold;
  border-bottom: 5px solid black;
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 5px;
`;

const StyledButton = styled.button `
  color: white;
  margin: .5rem 0;
  background: black;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  width: 200px;
  font-size: 1.2rem;
`
