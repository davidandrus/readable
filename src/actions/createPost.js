import { push } from 'react-router-redux';

import { createPost as makePostRequest } from '../API';
import { CREATE_POST } from './actionNames';

const createPost = (post) => {
  return (dispatch, getState) => {
    dispatch({
      type: CREATE_POST.STANDARD,
      payload: makePostRequest(post),
    }).then(({ value }) => {
      dispatch(push(`/${value.category}/${value.id}`));
    });
  };
};

export default createPost;
