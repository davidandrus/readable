import { downVoteComment as makeRequest } from '../API';
import { DOWNVOTE_COMMENT } from './actionNames';

const downVoteComment = (id) => {
  return (dispatch, getState) => {
    dispatch({
      type: DOWNVOTE_COMMENT.STANDARD,
      payload: makeRequest(id),
    });
  };
};

export default downVoteComment;
