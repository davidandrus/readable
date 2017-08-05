
import {
  createStore,
  applyMiddleware,
} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import { apiMiddleware } from 'redux-api-middleware';

import rootReducer from './reducers/root';

export default createStore(rootReducer, composeWithDevTools(
  applyMiddleware(apiMiddleware)
));