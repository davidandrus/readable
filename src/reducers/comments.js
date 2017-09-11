import { handleActions } from 'redux-actions';
import {
  CREATE_COMMENT,
  DELETE_COMMENT,
  DOWNVOTE_COMMENT,
  EDIT_COMMENT,
  LOAD_COMMENTS,
  UPVOTE_COMMENT,
} from '../actions/actionNames';

function updateComment(state, { payload }) {
  const { parentId } = payload;
  return {
    ...state,
    [parentId]: state[payload.parentId].map(comment => (
      // replace the current comment with the edited one
      comment.id === payload.id ? payload : comment
    )),
  };
}

export default handleActions({
  [CREATE_COMMENT.FULFILLED]: (state, { payload }) => {
    const { parentId } = payload;
    return {
      ...state,
      [parentId]: [
        ...state[payload.parentId],
        payload,
      ],
    };
  },
  [EDIT_COMMENT.FULFILLED]: updateComment,
  [DELETE_COMMENT.FULFILLED]: (state, { payload }) => {
    const { parentId } = payload;
    return {
      ...state,
      [parentId]: state[payload.parentId].filter(comment => (
        // filter out one with matching payload
        comment.id === payload.id ? false : true
      )),
    };
  },
  [UPVOTE_COMMENT.FULFILLED]: updateComment,
  [DOWNVOTE_COMMENT.FULFILLED]: updateComment,
  [LOAD_COMMENTS.FULFILLED]: (state, { payload: { post_id, comments } }) => ({
    ...state,
    [post_id]: comments,
  }),
}, {});

