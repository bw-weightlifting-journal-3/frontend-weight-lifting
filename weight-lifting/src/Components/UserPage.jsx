import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/AxiosWithAuth";
import styled from "styled-components";

const UserPage = () => {
    const [info, setInfo] = useState("");

    useEffect(() => {
        axiosWithAuth()
        .get('api/user')
        .then(res => {
            setInfo(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    const [newUserInfo, setNewUserInfo] = useState({
        name: "",
        email: ""
    })

    useEffect(() => {
        axiosWithAuth()
        .put('api/user')
        .then(res => {
            console.log(res)
        })
    }, []);

    const changeHandler = (e) => {
        e.preventDefault();
        setNewUserInfo({[e.target.name]: [e.target.value]});
    }

    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <OuterDiv>
            <form onSubmit={submitHandler}>
                <InnerDivLeft>
                    <h1>Name: {info.name}</h1>
                    <input type="text" name="name" placeholder="Change Name" value={newUserInfo.name} onChange={changeHandler}/>
                    <p>Email: {info.email}</p>
                    <input type="email" name="email" placeholder="Change Email" value={newUserInfo.email} onChange={changeHandler}/>
                </InnerDivLeft>
                <InnerDivRight>
                    <p>Goals: {info.goals}</p>
                </InnerDivRight>
                <button type="Submit">Submit</button>
            </form>
            
        </OuterDiv>
    )
};

export default UserPage;

const OuterDiv = styled.div`
`
const InnerDivLeft = styled.div`
    background-color: black;
    color: white;
`
const InnerDivRight = styled.div`
    background-color: gray;
    color: white;
`