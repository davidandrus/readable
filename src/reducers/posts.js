import uniqBy from 'lodash/uniqBy';
import { handleActions } from 'redux-actions';
import {
  LOAD_POSTS,
  CREATE_POST,
  UPVOTE,
  DOWNVOTE,
} from '../actions/actionNames';

const replacePost = (state, { payload }) => state
  .filter(({ id }) => id !== payload.id)
  .concat(payload);

export default handleActions({
  [LOAD_POSTS]: (state, { payload }) => payload,
  [CREATE_POST.FULFILLED]: (state, { payload }) => uniqBy([payload, ...state], 'id'),
  [UPVOTE.FULFILLED]: replacePost,
  [DOWNVOTE.FULFILLED]: replacePost,
}, []);

