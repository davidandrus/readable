import { handleActions } from 'redux-actions';
import { LOAD_POSTS } from '../actions/actionNames';

export default handleActions({
  [LOAD_POSTS]: (state, { payload }) => {
    console.log('loading posts sync', payload);
    return payload
  }
}, []);

