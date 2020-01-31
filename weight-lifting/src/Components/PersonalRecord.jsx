import React, { useState } from 'react';
import axios from 'axios';

export default function PersonalRecord() {
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

    );
};
