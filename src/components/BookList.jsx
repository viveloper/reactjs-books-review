import React, { useEffect } from 'react';
import Book from './Book';
import axios from 'axios';
import withAuth from '../hoc/withAuth';

function BookList(props) {
  const { books, receiveBooks, token } = props;

  useEffect(() => {
    (async () => {
      const res = await axios.get('https://api.marktube.tv/v1/book', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const books = res.data;
      receiveBooks(books);
    })();
  }, [receiveBooks, token])

  return (
    <div>
      {
        books.map((book) => <Book key={book.bookId} {...book} />)
      }
    </div>
  );
}

export default withAuth(BookList);