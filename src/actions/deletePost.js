import { push } from 'react-router-redux';

import { deletePost as makeDeleteRequest } from '../API';
import { DELETE_POST } from './actionNames';

const deletePost = (id) => {
  return (dispatch, getState) => {
    const deletedPromise = makeDeleteRequest(id)
      .then(() => id);

    dispatch({
      type: DELETE_POST.STANDARD,
      payload: deletedPromise,
    }).then(() => {
      dispatch(push('/'));
    });
  };
};

export default deletePost;
