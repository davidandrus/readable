import { upVoteComment as makeRequest } from '../API';
import { UPVOTE_COMMENT } from './actionNames';

export default function upVoteComment(id) {
  return (dispatch, getState) => {
    dispatch({
      type: UPVOTE_COMMENT.STANDARD,
      payload: makeRequest(id),
    });
  }
}