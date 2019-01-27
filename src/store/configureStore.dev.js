import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import rmi from 'redux-immutable-state-invariant';

export default (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, rmi())
  );
  };

