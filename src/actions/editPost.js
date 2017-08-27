import { editPost as makePostRequest } from '../API';
import { EDIT_POST } from './actionNames';

export default function editPost(id, params) {
  return (dispatch, getState) => {
    dispatch({
      type: EDIT_POST.STANDARD,
      payload: makePostRequest(id, params),
    });
  }
}