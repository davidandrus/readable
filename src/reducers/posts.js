import uniqBy from 'lodash/uniqBy';
import { handleActions } from 'redux-actions';
import {
  LOAD_POSTS,
  CREATE_POST,
} from '../actions/actionNames';

export default handleActions({
  [LOAD_POSTS]: (state, { payload }) => payload,
  [CREATE_POST.FULFILLED]: (state, { payload }) => uniqBy([payload, ...state], 'id'),
}, []);

