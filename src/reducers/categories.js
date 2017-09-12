import { handleActions } from 'redux-actions';

import { LOAD_CATEGORIES } from '../actions/actionNames';

export default handleActions({
  [LOAD_CATEGORIES.FULFILLED]: (state, { payload }) => payload,
}, []);
