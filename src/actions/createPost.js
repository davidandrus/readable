import { createPost as makePostRequest } from '../API';
import { CREATE_POST } from './actionNames';

export default function createPost(post) {
  return (dispatch, getState) => {
    return createPost(post)
      .then(() => {
        dispatch({
          type: CREATE_POST.STANDARD,
          payload: makePostRequest(post),
        });
      });
  }
}