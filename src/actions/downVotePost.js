import { downVotePost as makeRequest } from '../API';
import { DOWNVOTE_POST } from './actionNames';

const downVotePost = (id) => {
  return (dispatch, getState) => {
    dispatch({
      type: DOWNVOTE_POST.STANDARD,
      payload: makeRequest(id),
    });
  };
};

export default downVotePost;
