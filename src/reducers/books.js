import { FETCH_BOOKS_SUCCESS, DELETE_BOOK, UNDO_DELETE_BOOK } from "../actions";

const initialState = [];

function books(previousState = initialState, action) {
    if (action.type === FETCH_BOOKS_SUCCESS) {
        return [...action.books];
    }
    else if (action.type === DELETE_BOOK) {
        const newState = previousState.map(book => {
            if (book.bookId === action.bookId) {
                return {
                    ...book,
                    deletedAt: new Date().toISOString()
                }
            }
            return book;
        });
        return newState;
    }
    else if (action.type === UNDO_DELETE_BOOK) {
        const newState = previousState.map(book => {
            if (book.bookId === action.bookId) {
                return {
                    ...book,
                    deletedAt: null
                }
            }
            return book;
        });
        return newState;
    }
    else {
        return previousState;
    }
}

export default books;