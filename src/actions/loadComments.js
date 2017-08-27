import { getComments } from '../API';
import { LOAD_COMMENTS } from './actionNames';

export default function loadComments() {
  return (dispatch, getState) => {
    getState().posts.forEach(({ id }) => {
      dispatch({
        type: LOAD_COMMENTS.STANDARD,
        payload: getComments(id),
      });
    });
  }
}