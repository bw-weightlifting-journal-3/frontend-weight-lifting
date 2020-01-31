import React, { useState } from 'react';
import axios from 'axios';

export default function PersonalRecord() {
    /*Test text to see if my pushes are working */

    const [maxWeight, setMaxWeight] = useState([])

    useEffect(() => {

        const getMaxWeight = () => {
          axios
          .get("")
          .then(
            res => {
              setMaxWeight(res./*fill this out later*/)
              console.log("Succesfully recieved data", res)
            }
          )
          .catch(
            error => {
              console.error('Server Error', error);
            }
          )
        };
        getMaxWeight();
    
      }, []);

    return(
        <div className="pr">
            <div className="pr-title container">
                <p>Personal Record</p>
            </div>

            <div className="pr-numbers container">

                <div className="pr-max-weight container">
                    <h1 className="pr-max-weight-number">{/* PR Max Weight Number */}</h1>
                </div>

                <div className="pr-max-reps container">
                    <h1 className="pr-max-reps-number">{/* PR Max reps Number */}</h1>
                </div>

            </div>

            <div className="pr-exercise-body-region container">
                <p className="pr-exercise-body-region">{/* PR Exercise */} | {/* PR Body Region */}</p>
            </div>
        </div>

    );
};
