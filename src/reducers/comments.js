import { handleActions } from 'redux-actions';
import { LOAD_COMMENTS } from '../actions/actionNames';

export default handleActions({
  [LOAD_COMMENTS]: (state, { payload: {id, comments} }) => ({
    ...state,
    [id]: comments,
  }),
}, {});

