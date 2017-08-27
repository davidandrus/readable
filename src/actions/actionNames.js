const makeAsyncAction = (name) => ({
  STANDARD: name,
  PENDING: `${name}_PENDING`,
  FULFILLED: `${name}_FULFILLED`,
  REJECTED: `${name}_REJECTED`,
});

export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';
export const LOAD_POSTS = 'LOAD_POSTS';
export const CREATE_POST = makeAsyncAction('CREATE_POST');
export const DELETE_POST = makeAsyncAction('DELETE_POST');
export const UPVOTE = makeAsyncAction('UPVOTE');
export const DOWNVOTE = makeAsyncAction('DOWNVOTE');
