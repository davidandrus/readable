import { downVote } from '../API';
import { DOWNVOTE } from './actionNames';

export default function(id) {
  return (dispatch, getState) => {
    dispatch({
      type: DOWNVOTE.STANDARD,
      payload: downVote(id),
    });
  }
}