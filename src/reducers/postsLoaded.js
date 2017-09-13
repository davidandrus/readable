import { handleActions } from 'redux-actions';

import { LOAD_POSTS } from '../actions/actionNames';

export default handleActions({
  [LOAD_POSTS.FULFILLED]: (state, { payload }) => true
}, false);
