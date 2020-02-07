import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem('token')) {
          //push to component prop
          return <Component />;
        } else {
          //redirects the user if no token is found
          return <Redirect to='/' />;
        }
      }}
    />
  );
};

export default PrivateRoute;
