import { FETCH_BOOKS, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_FAILURE, DELETE_BOOK, DELETE_BOOK_SUCCESS, DELETE_BOOK_FAILURE } from "../actions";

const initialState = false;

function loading(previousState = initialState, action) {
    switch (action.type) {
        case FETCH_BOOKS:
        case DELETE_BOOK:
            return true;
        case FETCH_BOOKS_SUCCESS:
        case FETCH_BOOKS_FAILURE:
        case DELETE_BOOK_SUCCESS:
        case DELETE_BOOK_FAILURE:
            return false;
        default:
            return previousState;
    }
}

export default loading;