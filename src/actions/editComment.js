import { push } from 'react-router-redux';

import { editComment as makePostRequest } from '../API';
import { EDIT_COMMENT } from './actionNames';

export default function editComment(comment) {
  return (dispatch, getState) => {
    const state = getState();

    dispatch({
      type: EDIT_COMMENT.STANDARD,
      payload: makePostRequest(comment),
    }).then(({ value }) => {
      // @TODO - figure out a way to highlight the edited comment as hash does not work
      dispatch(push(`/posts/${value.parentId}`))
    });
  }
}