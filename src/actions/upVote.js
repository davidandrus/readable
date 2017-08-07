import { upVote } from '../API';
import { UPVOTE } from './actionNames';

export default function(id) {
  return (dispatch, getState) => {
    dispatch({
      type: UPVOTE.STANDARD,
      payload: upVote(id),
    });
  }
}