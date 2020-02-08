import React, { useState } from "react";
import styled from "styled-components";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import WorkoutSetCard from "./WorkoutSetCard";

// Have to map over 'Sets'

const AddWorkoutView = () => {
  const [title, setTitle] = useState({
    title: "",
    region_id: "",
    timestamp: Date.now()
  });
  const titleHandler = e => {
    setTitle({ ...title, [e.target.name]: e.target.value });
  };

  const [addSet, setAddSet] = useState({
    weight: "",
    sets: ""
  });

  const [allSets, setAllSets] = useState([]);

  const changeHandler = e => {
    setAddSet({ ...addSet, [e.target.name]: e.target.value });
  };

  const SubmitHandler = e => {
    e.preventDefault();
    AxiosWithAuth()
      .post("api/exercises", allSets)
      .then(res => {
        console.log("post Res", res);
      });
    setAllSets([]);
  };

  const newSet = e => {
    e.preventDefault();
    setAllSets([...allSets, addSet]);
    setAddSet({ weight: "", sets: "" });
  };

  return (
    <div>
      <Form onSubmit={""}>
        <Input
          name="title"
          type="text"
          placeholder="Barbell Curls"
          value={title.title}
          onChange={titleHandler}
        />
        <OuterDiv>
          <DivLeft>
            <h2>Weight</h2>
            <Input
              name="weight"
              type="text"
              placeholder="input weight"
              value={addSet.weight}
              onChange={changeHandler}
            />
          </DivLeft>
          <DivRight>
            <h2>Sets</h2>
            <Input
              name="sets"
              type="text"
              placeholder="add sets"
              value={addSet.sets}
              onChange={changeHandler}
            />
          </DivRight>
        </OuterDiv>

        <button onClick={newSet}>Add Sets</button>
      </Form>

      {allSets
        ? allSets.map(cv => {
            return <WorkoutSetCard data={cv} key={cv.id} />;
          })
        : "You have done nothing"}

      <button onClick="SubmitHandler"> End Exercise</button>
    </div>
  );
};

export default AddWorkoutView;

// All of our styled components
const AddButton = styled.button`
  position: fixed;
  opacity: 0.8;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: black;
  color: #ffc000;
  text-align: center;
  padding: 1.2rem;
  font-size: 22px;
  font-weight: bold;
  border: none;
`;

const Button = styled.button`
  position: fixed;
  opacity: 0.8;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: red;
  color: white;
  text-align: center;
  padding: 1.2rem;
  font-size: 1.5rem;
  &:hover {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  background: black;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  color: white;
`;

const Header = styled.h3`
  color: white;
  text-align: left;
  padding: 1.2rem;
`;

const Input = styled.input`
  text-align: center;
  margin: 1.3rem;
  background: white;
  border: none;
  color: black;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  // background-color: black;
`;

const OuterDiv = styled.div``;

const DivLeft = styled.div`
  @media (min-width: 500px) {
    background-color: black;
    width: 500px;
  }

  @media (min-width: 750px) {
    width: 100%;
  }
`;

const DivRight = styled.div`
  @media (min-width: 500px) {
    background-color: black;
    width: 500px;
  }

  @media (min-width: 750px) {
    width: 100%;
  }
`;
