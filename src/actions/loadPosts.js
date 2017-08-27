import { getPosts } from '../API';
import { LOAD_POSTS } from './actionNames';

export default function loadPosts() {
  return (dispatch, getState) => {
    return dispatch({
      type: LOAD_POSTS.STANDARD,
      payload: getPosts(),
    })
  }
}