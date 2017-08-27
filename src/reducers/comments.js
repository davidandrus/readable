import { handleActions } from 'redux-actions';
import { LOAD_COMMENTS } from '../actions/actionNames';

export default handleActions({
  [LOAD_COMMENTS.FULFILLED]: (state, { payload: { post_id, comments } }) => {
    return {
      ...state,
      [post_id]: comments,
    };
  },
}, {});

