import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/AxiosWithAuth';

export default function PersonalRecord() {
    const [maxWeight, setMaxWeight] = useState([]);

    const userSets = [];
    const userWeights = [];

    useEffect(() => {

        const gettingMaxWeight = () => {
          axiosWithAuth()
          .get("api/user")
          .then(
            (res) => {
                console.log(res)
                    const setData = res.data.exercises.map(
                        (exercise) => {
                            exercise.sets.map(
                                (set) => {
                                    console.log("This is a set", set);
                                    return userSets.push(set)
                                }
                            )
                        }
                    )

                userSets.map((set) => {
                    userWeights.push(set.weight)
                })

                const weightNumberMax = Math.max(...userWeights)


                setMaxWeight(weightNumberMax)


                console.log("weightNumberMax", typeof weightNumberMax)


                console.log("Are these the weights lifted?", maxWeight);

                console.log("Succesfully recieved data", res)
                console.log("sets arrays", res.data.exercises.map((exercise) => {
                    return (exercise.sets);
                }))
            }
          )
          .catch(
            error => {
              console.error('A Message From Me, Tyler. Your API Call Has An Error:', error);
            }
          )
        };

        gettingMaxWeight()

        console.log("This is userSets", userSets)
        console.log("This is userWeights", userWeights)


        console.log("This is the maxWeight State", maxWeight);

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

            </div>

        </div>

    );

  
};

// border: 1px solid peru;

///////////////////////////Styling/////////////////////////

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

//     max-width: 27%;
//     color: white;
//     background-color: black;
//     margin: auto;
//   }

//   .pr-title {
//     display: flex;
//     align-items: flex-start;
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

//   .lbs {
//     padding-right: 20px;
//     padding-left: 10px;
//     align-self: flex-end;
//   }

//   .reps {
//     padding-right: 10px;
//     padding-left: 10px;
//     align-self: flex-end;
//   }

//   .pr-exercise-body-region {
//     color: gray;
//   }


