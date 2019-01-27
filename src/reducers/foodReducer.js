import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.LOAD_FOOD_SUCCESS:
     return action.courses;
    default:
      return state;
  }
}
