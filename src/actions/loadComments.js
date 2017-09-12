import { getComments } from '../API';
import { LOAD_COMMENTS } from './actionNames';

const loadComments = () => {
  return (dispatch, getState) => {
    getState().posts.forEach(({ id }) => {
      dispatch({
        type: LOAD_COMMENTS.STANDARD,
        payload: getComments(id),
      });
    });
  };
};

export default loadComments;
