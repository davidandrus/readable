const makeAsyncAction = (name) => ({
  STANDARD: name,
  PENDING: `${name}_PENDING`,
  FULFILLED: `${name}_FULFILLED`,
  REJECTED: `${name}_REJECTED`,
});

export const LOAD_CATEGORIES = makeAsyncAction('LOAD_CATEGORIES');
export const LOAD_POSTS = makeAsyncAction('LOAD_POSTS');
export const LOAD_COMMENTS = makeAsyncAction('LOAD_COMMENTS');
export const CREATE_POST = makeAsyncAction('CREATE_POST');
export const EDIT_POST = makeAsyncAction('EDIT_POST');
export const DELETE_POST = makeAsyncAction('DELETE_POST');
export const UPVOTE = makeAsyncAction('UPVOTE');
export const DOWNVOTE = makeAsyncAction('DOWNVOTE');
