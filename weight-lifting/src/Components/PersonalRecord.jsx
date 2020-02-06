import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/AxiosWithAuth';

// import PersonalRecord from "./Components/PersonalRecord"
// <PersonalRecord/>

export default function PersonalRecord() {


    const [weightsLifted, setWeightsLifted] = useState ([]);

  const [maxWeight, setMaxWeight] = useState([]);
  const [repsOfMaxWeight, setRepsOfMaxWeight] = useState([]);

  useEffect(() => {
    const getMaxWeight = () => {
      axios
        .get('https://bw-weightlifting-journal.herokuapp.com/api/user')
        .then(res => {
          // setMaxWeight(
          //     res.data.exercise.weight.filter((weight) => {
          //         Math.max(weight)
          //     } ) )
          // setRepsOfMaxWeight(
          //     res.data.exercise.weight.filter((weight) => {
          //         Math.max(weight)
          //     } ) )
          console.log('Succesfully recieved data', res);
        })
        .catch(error => {
          console.error(
            'A Message From Me, Tyler. Your API Call Has An Error:',
            error
          );
        });
    };

    setMaxWeight(400);
    setRepsOfMaxWeight(9);

    getMaxWeight();
  }, []);

  return (
    <div className='pr-component'>
      <div className='pr-title container'>
        <p>Personal Record</p>
      </div>

      <div className='pr-numbers container'>
        <div className='pr-max-weight container'>
          <h1 className='pr-max-weight-number'>{maxWeight}</h1>
          <p className='units-of-measure lbs'>LBS</p>



    const [maxWeight, setMaxWeight] = useState([]);
    const [repsOfMaxWeight, setRepsOfMaxWeight] = useState([]);

    const [exerciseNameOfMax, setExerciseNameOfMax] = useState([]);
    const [bodyRegionOfMax, setBodyRegionOfMax] = useState([]);

    // const [objectContainingMax, setObjectContainingMax] = useState([]);

    const [objectSetToArr, setObjectSetToArr] = useState([]);
    const thisBeOurSets = [];
    const thisBeOurWeights = [];

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
                                    return thisBeOurSets.push(set)
                                }
                            )
                        }
                    )



                thisBeOurSets.map((set) => {
                    thisBeOurWeights.push(set.weight)
                })

                const weightNumberMax = Math.max(...thisBeOurWeights)

                // const weightStringToNum = parseInt(weightNumberMax)

                setMaxWeight(weightNumberMax)

                // console.log("Weight string to Num", weightStringToNum)

                console.log("weightNumberMax", typeof weightNumberMax)

                // setMaxWeight()
                // setObjectSetToArr(
                //     Object.values(maxWeight)
                // )

                // setMaxWeight(
                //     Math.max(...weightsLifted)
                // )

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

        console.log("This is thisBeOurSets", thisBeOurSets)
        console.log("This is thisBeOurWeights", thisBeOurWeights)


        // setMaxWeight(250)
        // setRepsOfMaxWeight(8)

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

                <div className="pr-max-reps container">
                    <h1 className="pr-max-reps-number">{repsOfMaxWeight}</h1>
                    <p className="units-of-measure reps">REPS</p>
                </div>

            </div>

            <div className="pr-exercise-body-region container">
<p className="pr-exercise-body-region">{exerciseNameOfMax}* PR Exercise Name *   |    {bodyRegionOfMax}*PR Body Region Name *</p>
            </div>

        </div>

        <div className='pr-max-reps container'>
          <h1 className='pr-max-reps-number'>{repsOfMaxWeight}</h1>
          <p className='units-of-measure reps'>REPS</p>
        </div>
      </div>

      <div className='pr-exercise-body-region container'>
        <p className='pr-exercise-body-region'>
          {/* PR Exercise Name */}* PR Exercise Name * |{' '}
          {/* PR Body Region Name */} *PR Body Region Name *
        </p>
      </div>
    </div>
  );
}


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
    
  






////////////////////My Version Of The API//////////////

// const remadeData = {
    //     id: 1,
    //     email: "me@me.com",
    //     name: "Me",
    //     exercises: [{
    //         id: 1,
    //         user_id: 1,
    //         region_id: 4,
    //         name: "Deadlift",
    //         timestamp: 1580533720,
    //         sets: [{
    //             id: 1,
    //             reps: 5,
    //             weight: 150,
    //         __proto__: Object,
    //         },
    //         {
    //             id: 2,
    //             reps: 6,
    //             weight: 160,
    //             __proto__: Object,
    //         }],
            
    //     },{
    //         id: 2,
    //         user_id: 1,
    //         region_id: 1,
    //         name: "Bench press",
    //         timestamp: 1580533721,
    //         sets: [{
    //             id: 3,
    //             reps: 7,
    //             weight: 170,
    //             __proto__: Object,
    //         },{
    //             id: 4,
    //             reps: 8,
    //             weight: 180,
    //         }],
    //     }]
    
    // };

    // console.log("This is my data", remadeData);

    // function newMaxWeight() {
    //     remadeData.excercises.filter((excerciseObjects) => {
    //         return(
    //             Math.max(excerciseObjects.sets.weight)
    //         )
    //     })
    // } 

