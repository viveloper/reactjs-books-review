import {all, call} from 'redux-saga/effects';
import booksSaga from './books';

// rootSaga
function* rootSaga() {
    yield all([call(booksSaga)]);
}

export default rootSaga;