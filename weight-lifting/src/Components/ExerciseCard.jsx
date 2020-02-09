import React, { useState, useEffect } from 'react';
import Arrow from '../assets/arrow.svg';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axiosWithAuth from '../utils/AxiosWithAuth';

const ExerciseCard = props => {
  const [region, setRegion] = useState();

  useEffect(() => {
    axiosWithAuth()
      .get(`api/regions/${props.data.region_id}`)
      .then(res => {
        setRegion(res.data.name);
      });
  });

  return (
    <Link
      to={{
        pathname: `/exercises/${props.data.id}`,
        state: {
          name: props.data.name
        }
      }}>
      <div className='ex_card_container'>
        <div className='ex_titleInfo'>
          <h2>{props.data.name}</h2>
          <p>
            Sets: {props.sets.length} | {region}
          </p>
        </div>
        <img src={Arrow} alt='arrow icon' />
      </div>
    </Link>
  );
};
export default ExerciseCard;
