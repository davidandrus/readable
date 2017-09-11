import { push } from 'react-router-redux';

import { editPost as makePostRequest } from '../API';
import { EDIT_POST } from './actionNames';

export default function editPost(params) {
  return (dispatch, getState) => {
    dispatch({
      type: EDIT_POST.STANDARD,
      payload: makePostRequest(params),
    }).then(({ value }) => {
      dispatch(push(`/${value.category}/${value.id}`));
    });;
  }
}