import { handleActions } from 'redux-actions';
import { SET_SORT } from '../actions/actionNames';

export default handleActions({
  [SET_SORT]: (state, { payload }) => payload,
}, 'voteScore');