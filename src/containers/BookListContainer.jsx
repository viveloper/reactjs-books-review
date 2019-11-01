import { connect } from 'react-redux';
import BookList from '../components/BookList';
import { List } from 'immutable';
import { receiveBooks } from '../actions';

const mapStateToProps = (state) => {
    const { books } = state;
    return {
        books: List(books).toArray()
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        receiveBooks: (books) => {
            dispatch(receiveBooks(books));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);