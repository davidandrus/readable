import { createPost as makePostRequest } from '../API';
import { CREATE_POST } from './actionNames';

    // store.dispatch(createPost({
    //   "id": "6ni6ok3ym7mf1p33lnez-sucka",
    //   "timestamp": 1468479767190,
    //   "title": "sucka - Learn Redux in 10 minutes!",
    //   "body": "sucka - Just kidding. It takes more than 10 minutes to learn technology.",
    //   "author": "sucka - thingone",
    //   "category": "redux",
    // }));
  // }

export default function createPost(post) {
  return (dispatch, getState) => {
    console.log({ post });
    return;

    dispatch({
      type: CREATE_POST.STANDARD,
      payload: makePostRequest(post),
    });
  }
}