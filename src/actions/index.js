export const FETCH_BOOKS = 'FETCH_BOOKS';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';
export const DELETE_BOOK = 'DELETE_BOOK';
export const DELETE_BOOK_SUCCESS = 'DELETE_BOOK_SUCCESS';
export const DELETE_BOOK_FAILURE = 'DELETE_BOOK_FAILURE';
export const UNDO_DELETE_BOOK = 'UNDO_DELETE_BOOK';

export function fetchBooks(token) {
    return {
        type: FETCH_BOOKS,
        token
    }
}
export function deleteBook(token, bookId) {
    return {
        type: DELETE_BOOK,
        token,
        bookId
    }
}
export function undoDeleteBook(bookId) {
    return {
        type: UNDO_DELETE_BOOK,
        bookId
    }
}