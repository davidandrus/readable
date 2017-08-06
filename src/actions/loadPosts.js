import { getPosts } from '../API';
import { LOAD_POSTS } from './actionNames';

const loadPostsSync = (payload) => ({
  payload,
  type: LOAD_POSTS,
});

export default function loadPosts() {
  return (dispatch, getState) => {
    getPosts()
      .then(posts => dispatch(loadPostsSync(posts)))
  }
}