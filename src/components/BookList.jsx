import React, { useEffect } from 'react';
import Book from './Book';
import withAuth from '../hoc/withAuth';
import './BookList.css';

function BookList(props) {
  const { books, fetchBooks, token, deleteBook, isLoading } = props;

  useEffect(() => {
    fetchBooks(token);
  }, [fetchBooks, token])

  return (
    <div>
      {        
        books.map((book) => {
          return (
            <Book key={book.bookId} {...book} token={token} deleteBook={deleteBook} />
          )
        })
      }
      {
        isLoading ?
          <>
            <div className="loading-bg"></div>
            <img className="loading-img" src="/images/loading.gif" alt="loading" />
          </>
          : null
      }
    </div>
  );
}

export default withAuth(BookList);