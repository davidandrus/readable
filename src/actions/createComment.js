import { replace } from 'react-router-redux';
import { reset } from 'redux-form';

import { createComment as makePostRequest } from '../API';
import { CREATE_COMMENT } from './actionNames';

export default function createComment(postId, comment) {
  return (dispatch, getState) => {
    const state = getState();

    dispatch({
      type: CREATE_COMMENT.STANDARD,
      payload: makePostRequest({
        ...comment,
        parentId: postId,
      }),
    }).then(({ value }) => {
      const { pathname } = state.router.location;
      dispatch(reset('createComment'))
      dispatch(replace(`${pathname}#${value.id}`));
    });
  }
}