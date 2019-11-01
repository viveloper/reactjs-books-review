import React from 'react';
import withAuth from '../hoc/withAuth';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookListContainer from '../containers/BookListContainer';

function Home(props) {
  return (
    <div>
      <h2>Home</h2>
      <p>token : {props.token}</p>
      <Header />
      <BookListContainer />
      <Footer />
    </div>
  );
}

export default withAuth(Home);