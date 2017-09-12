import { upVoteComment as makeRequest } from '../API';
import { UPVOTE_COMMENT } from './actionNames';

const upVoteComment = (id) => {
  return (dispatch, getState) => {
    dispatch({
      type: UPVOTE_COMMENT.STANDARD,
      payload: makeRequest(id),
    });
  };
};

export default upVoteComment;
