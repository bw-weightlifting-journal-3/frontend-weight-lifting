import React, { createContext } from 'react';

const initialState = {
  userName: '',
  id: 1,
  email: '',
  isLoggedIn: false,
  exercises: [
    {
      id: '',
      name: '',
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
