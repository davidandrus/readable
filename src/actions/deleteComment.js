import { push } from 'react-router-redux';

import { deleteComment as makeDeleteRequest } from '../API';
import { DELETE_COMMENT } from './actionNames';

export default function deleteComment(id) {
  return (dispatch, getState) => {
    const deletedPromise = makeDeleteRequest(id)
    dispatch({
      type: DELETE_COMMENT.STANDARD,
      payload: deletedPromise,
    })
  }
}