import { createPost as makePostRequest } from '../API';
import { CREATE_POST } from './actionNames';

export default function createPost(post) {
  return (dispatch, getState) => {
    dispatch({
      type: CREATE_POST,
      payload: makePostRequest(post)
    });
  }
}