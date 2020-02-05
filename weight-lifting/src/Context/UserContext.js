import React, { createContext } from 'react';

const initialState = {
  // userName of user
  userName: '',
  // user's id
  id: 1,
  // user's email
  email: '',
  isLoggedIn: false,
  // list of exercises / then broken into sets
  exercises: [
    {
      id: '',
      nameWorkout: '',
      sets: [
        {
          id: 1,
          reps: 0,
          weight: 0,
          isEditing: false
        }
      ]
    }
  ]
};

export const UserContext = createContext(initialState);
