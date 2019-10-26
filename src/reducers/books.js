import { ADD_BOOKS } from "../actions";

const initialState = [];
export default function books(state = initialState, action) {
  if(action.type===ADD_BOOKS){
    return [...state, ...action.books];
  }
  return state;
}