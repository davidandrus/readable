import { upVotePost as makeRequest } from '../API';
import { UPVOTE_POST } from './actionNames';

const upVotePost = (id) => {
  return (dispatch, getState) => {
    dispatch({
      type: UPVOTE_POST.STANDARD,
      payload: makeRequest(id),
    });
  };
};

export default upVotePost;
