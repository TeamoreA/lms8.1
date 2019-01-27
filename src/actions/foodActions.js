import courseApi from '../api/mockFoodApi';
import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from "./ajaxStatusActions";

export function loadCoursesSuccess(courses) {
    return { type: types.LOAD_FOOD_SUCCESS, courses };
}

export function loadFood() {
  return function (dispatch) {
  dispatch(beginAjaxCall());
    return  courseApi.getAllCourses()
      .then(courses => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch(error => {
        throw(error);
      });
  };
}


