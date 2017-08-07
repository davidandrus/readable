import uniqBy from 'lodash/uniqBy';
import { handleActions } from 'redux-actions';
import {
  LOAD_POSTS,
  CREATE_POST_FULFILLED,
  CREATE_POST_REJECTED,
  CREATE_POST_PENDING,
} from '../actions/actionNames';

export default handleActions({
  [LOAD_POSTS]: (state, { payload }) => payload,
  [CREATE_POST_FULFILLED]: (state, { payload }) => uniqBy([payload, ...state], 'id'),
}, []);

