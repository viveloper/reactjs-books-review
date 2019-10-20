import React from 'react';
import withAuth from '../hoc/withAuth';

function Home(props) {
  console.log(props);
  return (
    <div>
      <h2>Home</h2>
      <p>token : {props.token}</p>
    </div>

  );
}

export default withAuth(Home);