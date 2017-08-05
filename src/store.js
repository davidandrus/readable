
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import rootReducer from './reducers/root';

export default createStore(rootReducer, devToolsEnhancer());