import React from 'react';
import {Redirect} from 'react-router-dom';

export default function withAuth(Component) {

  // return props => {
  //   const token = localStorage.getItem('token');
  //   console.log(token);
  //   if (token === null) {
  //     return <Redirect to="/signin" />;
  //   }
  //   return <Component {...props} token={token} />;
  // };

  return function NewComponent(props) {
    const token = localStorage.getItem('token');    
    if (token) {
      return <Component {...props} token={token} />;      
    }
    else{
      return <Redirect to="/signin" />;
    }
  };
}