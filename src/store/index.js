import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const rootReducer = combineReducers(reducers);

let composeEnhancers = compose;

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
