import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/AxiosWithAuth";
import styled from "styled-components";

const UserPage = () => {
    const [data, setData] = useState("");

    useEffect(() => {
        axiosWithAuth()
        .get('api/user')
        .then(res => {
            setData(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    })

    return (
        <div>
            <h1>Name: {data.name}</h1>
            <p>Email: {data.email}</p>
            <p>Goals: {data.goals}</p>
            <img src={data.avatar_url}/>
        </div>
    )
};

export default UserPage;

