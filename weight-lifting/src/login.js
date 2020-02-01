import React, { useState } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [inputField, setInputField] = useState({
    email: "",
    password: ""
  });

  const changeHandler = e => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };

  const SubmitHandler = e => {
    e.preventDefault();
    axios
      .post(
        "https://bw-weightlifting-journal.herokuapp.com/api/login",
        inputField
      )
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        console.log(res.data.payload);
      })
      .catch(err => {
        console.log("err", err);
      });
  };

  return (
    <div>
      <h1>Get Swole Yo!</h1>
      <form onSubmit={SubmitHandler}>
        <input
          name="email"
          type="text"
          placeholder="email"
          value={inputField.email}
          onChange={changeHandler}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          value={inputField.password}
          onChange={changeHandler}
        />
        <button typeof="submit">LogIn 🏋️‍</button>
      </form>
      {/* <Link to="/signUp">Get Signed Up 💪</Link> */}
    </div>
  );
};

export default Login;
