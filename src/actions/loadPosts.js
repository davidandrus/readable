import { getPosts } from '../API';
import loadComments from './loadComments';
import { LOAD_POSTS } from './actionNames';

const loadPosts = () => {
  return (dispatch, getState) => {
    return dispatch({
      type: LOAD_POSTS.STANDARD,
      payload: getPosts(),
    }).then(() => {
      dispatch(loadComments());
    });
  };
};

export default loadPosts;