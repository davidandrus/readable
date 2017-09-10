import { push } from 'react-router-redux';

import { createComment as makePostRequest } from '../API';
import { CREATE_COMMENT } from './actionNames';

export default function createComment(postId, comment) {
  return (dispatch, getState) => {
    dispatch({
      type: CREATE_COMMENT.STANDARD,
      payload: makePostRequest({
        ...comment,
        parentId: postId,
      }),
    }).then(({ value }) => {
      dispatch(push(`/${value.category}/${value.id}`));
    });
  }
}