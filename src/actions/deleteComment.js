import { deleteComment as makeDeleteRequest } from '../API';
import { DELETE_COMMENT } from './actionNames';

const deleteComment = (id) => {
  return (dispatch, getState) => {
    const deletedPromise = makeDeleteRequest(id)

    dispatch({
      type: DELETE_COMMENT.STANDARD,
      payload: deletedPromise,
    });
  };
};

export default deleteComment;
