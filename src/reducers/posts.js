import { handleActions } from 'redux-actions';
import {
  LOAD_POSTS,
  CREATE_POST,
  DELETE_POST,
  EDIT_POST,
  UPVOTE,
  DOWNVOTE,
} from '../actions/actionNames';

const addOrReplacePost = (state, { payload }) => state
  .filter(({ id }) => id !== payload.id)
  .concat(payload);

export default handleActions({
  [LOAD_POSTS.FULFILLED]: (state, { payload }) => payload,
  [CREATE_POST.FULFILLED]: addOrReplacePost,
  [DELETE_POST.FULFILLED]: (state, { payload }) => state.map(post => ({
    ...post,
    deleted: post.id === payload || post.deleted,
  })),
  [EDIT_POST.FULFILLED]: addOrReplacePost,
  [UPVOTE.FULFILLED]: addOrReplacePost,
  [DOWNVOTE.FULFILLED]: addOrReplacePost,
}, []);

