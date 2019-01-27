import { combineReducers } from "redux";
import courses from './foodReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  ajaxCallsInProgress
});
 export default rootReducer;
