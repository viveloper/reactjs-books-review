import { combineReducers } from 'redux';
import books from './books';
import loading from './loading';

const rootReducer = combineReducers({ 
    books,
    isLoading: loading
});

export default rootReducer;