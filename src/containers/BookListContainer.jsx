import React from 'react';
import { connect } from 'react-redux';
import BookList from '../components/BookList';
import { addBooks } from '../actions';

const mapStateToProps = () => {
  return{
    books: state.books
  }
}

const mapDispatchToProps = () => {
  return{
    addBooks: books=>{
      dispatchEvent(addBooks);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)