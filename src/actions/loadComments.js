import { getComments } from '../API';
import { LOAD_COMMENTS } from './actionNames';

export default function loadComments(postId) {
  return (dispatch, getState) => {
    dispatch({
      type: LOAD_COMMENTS.STANDARD,
      payload: getComments(postId),
    });
  }
}