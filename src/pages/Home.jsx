import React, {useState, useEffect} from 'react';
import withAuth from '../hoc/withAuth';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Book from '../components/Book';
import axios from 'axios';
import BookListContainer from '../containers/BookListContainer';

function Home(props) {
  const [books, setBooks] = useState([]);

  useEffect(()=>{
    axios.get('https://api.marktube.tv/v1/book', {
      headers: {
        Authorization: `Bearer ${props.token}`
      }
    }).then(res=>{setBooks(res.data)})
  },[]);

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