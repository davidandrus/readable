import uniqBy from 'lodash/uniqBy';
import { handleActions } from 'redux-actions';
import {
  LOAD_POSTS,
  CREATE_POST,
  UPVOTE,
  DOWNVOTE,
} from '../actions/actionNames';

const addOrReplacePost = (state, { payload }) => state
  .filter(({ id }) => id !== payload.id)
  .concat(payload);

export default handleActions({
  [LOAD_POSTS]: (state, { payload }) => payload,
  [CREATE_POST.FULFILLED]: addOrReplacePost,
  [UPVOTE.FULFILLED]: addOrReplacePost,
  [DOWNVOTE.FULFILLED]: addOrReplacePost,
}, []);

