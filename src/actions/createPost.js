import { createPost as makePostRequest } from '../API';
import { CREATE_POST } from './actionNames';

const createPostSync = (payload) => ({
  payload,
  type: CREATE_POST,
});

export default function createPost(post) {
  console.log('posting', post);
  return (dispatch, getState) => {
    makePostRequest(post)
      .then(post => dispatch(createPostSync(post)))
  }
}