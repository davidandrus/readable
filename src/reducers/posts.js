import { handleActions } from 'redux-actions';

import {
  LOAD_POSTS,
  CREATE_POST,
  DELETE_POST,
  EDIT_POST,
  UPVOTE_POST,
  DOWNVOTE_POST,
} from '../actions/actionNames';

const addOrReplacePost = (state, { payload }) => state
  .filter(({ id }) => id !== payload.id)
  .concat(payload);

export default handleActions({
  [LOAD_POSTS.FULFILLED]: (state, { payload }) => payload.filter(post => !post.deleted),
  [CREATE_POST.FULFILLED]: addOrReplacePost,
  [DELETE_POST.FULFILLED]: (state, { payload }) => state.filter(post => post.id !== payload),
  [EDIT_POST.FULFILLED]: addOrReplacePost,
  [UPVOTE_POST.FULFILLED]: addOrReplacePost,
  [DOWNVOTE_POST.FULFILLED]: addOrReplacePost,
}, []);
