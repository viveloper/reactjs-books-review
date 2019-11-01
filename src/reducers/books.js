import { RECEIVE_BOOKS, DELETE_BOOK, UNDO_DELETE_BOOK } from "../actions";
import { List } from 'immutable';

const initialState = [];

function books(previousState = initialState, action) {
    if (action.type === RECEIVE_BOOKS) {
        const newState = List(action.books).toArray();
        return newState;
    }
    else if (action.type === DELETE_BOOK) {
        const newState = List(previousState).map((book, index) => {
            if (book.bookId === action.bookId) {
                book.deletedAt = new Date().toISOString();
            }
            return book;
        }).toArray();

        return newState;
    }
    else if (action.type === UNDO_DELETE_BOOK) {
        const newState = List(previousState).map((book, index) => {
            if (book.bookId === action.bookId) {
                book.deletedAt = null;
            }
            return book;
        }).toArray();

        return newState;
    }
    else {
        return previousState;
    }
}

export default books;