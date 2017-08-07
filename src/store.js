
import {
  createStore,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';
import promiseMiddleware from 'redux-promise-middleware';

import history from './history';
import rootReducer from './reducers/root';

const routerware = routerMiddleware(history);
 
export default createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(thunk, routerware, promiseMiddleware()))
);