import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_BOOKS, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_FAILURE, DELETE_BOOK, DELETE_BOOK_SUCCESS, DELETE_BOOK_FAILURE, UNDO_DELETE_BOOK } from '../actions';

// async api
async function fetchBooksAPI(token) {
    const res = await axios.get('https://api.marktube.tv/v1/book', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    const books = res.data;
    // return books;
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(books);
            // reject(new Error('error!!'));
        }, 500);
    });
}
async function deleteBookAPI(token, bookId) {
    // const res = await axios.delete(`https://api.marktube.tv/v1/book/${bookId}`, {
    //     headers: {
    //         Authorization: `Bearer ${token}`
    //     }
    // });
    // const result = res.data;    

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({success: true});
            // reject(new Error('error!!'));
        }, 2000);
    });
}

// worker saga
function* fetchBooks(action) {
    const { token } = action;
    try {
        const books = yield call(fetchBooksAPI, token);
        yield put({
            type: FETCH_BOOKS_SUCCESS,
            books
        });
    }
    catch (error) {
        console.error(error.toString());
        yield put({
            type: FETCH_BOOKS_FAILURE
        });
    }
}
function* deleteBook(action) {
    const { token, bookId } = action;
    try {
        const result = yield call(deleteBookAPI, token, bookId);
        if (result.success) {
            yield put({
                type: DELETE_BOOK_SUCCESS
            });
        }
        else {            
            yield put({
                type: DELETE_BOOK_FAILURE
            });
            yield put({
                type: UNDO_DELETE_BOOK,
                bookId
            });
        }
    }
    catch (error) {
        console.error(error.toString());
        yield put({
            type: DELETE_BOOK_FAILURE
        });
        yield put({
            type: UNDO_DELETE_BOOK,
            bookId
        });
    }
}

// watcher saga
function* booksSaga() {
    yield takeLatest(FETCH_BOOKS, fetchBooks);
    yield takeLatest(DELETE_BOOK, deleteBook);
}

export default booksSaga;