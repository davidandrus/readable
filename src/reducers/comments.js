import { handleActions } from 'redux-actions';
import {
  CREATE_COMMENT,
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
  [LOAD_COMMENTS.FULFILLED]: (state, { payload: { post_id, comments } }) => ({
    ...state,
    [post_id]: comments,
  }),
}, {});

