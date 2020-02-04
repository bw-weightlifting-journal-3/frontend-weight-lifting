import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import PersonalRecord from "./Components/PersonalRecord"
// <PersonalRecord/>


export default function PersonalRecord() {

    const [maxWeight, setMaxWeight] = useState([])
    const [repsOfMaxWeight, setRepsOfMaxWeight] = useState([])

    useEffect(() => {

        const getMaxWeight = () => {
          axios
          .get("https://bw-weightlifting-journal.herokuapp.com/api/user")
          .then(
            res => {
                // setMaxWeight(
                //     res.data.exercise.weight.filter((weight) => {
                //         Math.max(weight)
                //     } ) )
                // setRepsOfMaxWeight(
                //     res.data.exercise.weight.filter((weight) => {
                //         Math.max(weight)
                //     } ) )

              console.log("Succesfully recieved data", res)
            }
          )
          .catch(
            error => {
              console.error('A Message From Me, Tyler. Your API Call Has An Error:', error);
            }
          )
        };

        setMaxWeight(400)
        setRepsOfMaxWeight(9)

        getMaxWeight();
    
      }, []);

    return(
        <div className="pr-component">
            <div className="pr-title container">
                <p>Personal Record</p>
            </div>

            <div className="pr-numbers container">

                <div className="pr-max-weight container">
                    <h1 className="pr-max-weight-number">{maxWeight}</h1>
                    <p className="units-of-measure lbs">LBS</p>
                </div>

                <div className="pr-max-reps container">
                    <h1 className="pr-max-reps-number">{repsOfMaxWeight}</h1>
                    <p className="units-of-measure reps">REPS</p>
                </div>

            </div>

            <div className="pr-exercise-body-region container">
                <p className="pr-exercise-body-region">{/* PR Exercise Name */}* PR Exercise Name *   |   {/* PR Body Region Name */} *PR Body Region Name *</p>
            </div>
        </div>

    );
};





// .pr-component {
//   max-width: 25%;
//   color: white;
//   background-color: black;
//   margin: auto;
// }

// .pr-title {
//   display: flex;
//   align-items: flex-start;
// }

// .pr-numbers {
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
// }

// .pr-max-weight {
//   display: flex;
//   flex-direction: row;
//   align-content: bottom;
// }

// .pr-max-reps {
//   display: flex;
//   flex-direction: row;
//   align-content: bottom;
// }

// .lbs {
//   padding-right: 20px;
//   padding-left: 10px;
//   align-self: flex-end;
// }

// .reps {
//   padding-right: 10px;
//   padding-left: 10px;
//   align-self: flex-end;
// }
  
// //   /* border: 1px solid peru; */
  