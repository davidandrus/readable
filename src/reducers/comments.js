import { handleActions } from 'redux-actions';
import {
  CREATE_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT,
  LOAD_COMMENTS,
} from '../actions/actionNames';

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
  [EDIT_COMMENT.FULFILLED]: (state, { payload }) => {
    const { parentId } = payload;
    return {
      ...state,
      [parentId]: state[payload.parentId].map(comment => (
        // replace the current comment with the edited one
        comment.id === payload.id ? payload : comment
      )),
    };

    return state;
  },
  [DELETE_COMMENT.FULFILLED]: (state, { payload }) => {
    const { parentId } = payload;
    return {
      ...state,
      [parentId]: state[payload.parentId].filter(comment => (
        // filter out one with matching payload
        comment.id === payload.id ? false : true
      )),
    };

    return state;
  },
  [LOAD_COMMENTS.FULFILLED]: (state, { payload: { post_id, comments } }) => ({
    ...state,
    [post_id]: comments,
  }),
}, {});

