import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import PersonalRecord from "./Components/PersonalRecord"
// <PersonalRecord/>

// res./*fill this out later*/

export default function PersonalRecord({ stats }) {

    const [maxWeight, setMaxWeight] = useState([])
    const [repsOfMaxWeight, setRepsOfMaxWeight] = useState([])

    useEffect(() => {

        const getMaxWeight = () => {
          axios
          .get("https://bw-weightlifting-journal.herokuapp.com/api/user")
          .then(
            res => {
              setMaxWeight(400)
              setRepsOfMaxWeight(9)

              console.log("Succesfully recieved data", res)
            }
          )
          .catch(
            error => {
              console.error('A Message From Me, Tyler. Your API Call Has An Error:', error);
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
                    <h1 className="pr-max-weight-number">{maxWeight}400</h1>
                    <p className="units-of-measure lbs">LBS</p>
                </div>

                <div className="pr-max-reps container">
                    <h1 className="pr-max-reps-number">{repsOfMaxWeight}9</h1>
                    <p className="units-of-measure reps">REPS</p>
                </div>

            </div>

            <div className="pr-exercise-body-region container">
                <p className="pr-exercise-body-region">{/* PR Exercise */} | {/* PR Body Region */}</p>
            </div>
        </div>

    );
};




// .pr {
//     color: white;
//     background-color: black;
//     width: 100%;
//   }
  
//   .pr-numbers {
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//   }
  
//   .pr-max-weight {
//     display: flex;
//     flex-direction: row;
//     align-content: bottom;
//   }
  
//   .pr-max-reps {
//     display: flex;
//     flex-direction: row;
//     align-content: bottom;
//   }
  
//   .units-of-measure {
//     padding-right: 10px;
//     padding-left: 10px;
//   }