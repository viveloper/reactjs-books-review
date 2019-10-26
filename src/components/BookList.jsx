import React from 'react';

export default function BookList({ books, addBooks }) {
  return (
    <div>
      {
        books.map((book) => <Book key={book.bookId} {...book} />)
      }
    </div>
  );
}