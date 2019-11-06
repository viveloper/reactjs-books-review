import { connect } from 'react-redux';
import BookList from '../components/BookList';
import { fetchBooks, deleteBook } from '../actions';

const mapStateToProps = (state) => {
    const { books, isLoading } = state;
    return {
        books: books.filter(book => book.deletedAt === null),
        isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBooks: token => {
            dispatch(fetchBooks(token));
        },
        deleteBook: (token, bookId) => {
            dispatch(deleteBook(token, bookId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);