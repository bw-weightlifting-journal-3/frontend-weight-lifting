import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/AxiosWithAuth';
import styled from 'styled-components';

const UserPage = () => {
  // const [data, setData] = useState("");

  // useEffect(() => {
  //     axiosWithAuth()
  //     .get('api/user')
  //     .then(res => {
  //         setData(res.data);
  //     })
  //     .catch(err => {
  //         console.log(err);
  //     })
  // }, [])

  return (
    <OuterDiv>
      <InnerDivLeft>
        <h1>Name: {data.name}</h1>
        <p>Email: {data.email}</p>
      </InnerDivLeft>
      <InnerDivRight>
        <p>Goals: {data.goals}</p>
        <img src={data.avatar_url} />
      </InnerDivRight>
    </OuterDiv>
  );
};

export default UserPage;

const OuterDiv = styled.div``;
const InnerDivLeft = styled.div`
  background-color: black;
  color: white;
`;
const InnerDivRight = styled.div`
  background-color: gray;
  color: white;
`;
