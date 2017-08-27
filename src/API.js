const BASE_URL = 'http://localhost:5001';

const standardFetch = (endpoint, options = {}) => {
  const {
    method = 'GET',
    headers,
    body,
  } = options;

  return fetch(`${BASE_URL}/${endpoint}`, {
    method,
    headers: new Headers({
      'authorization': 'authHeaderValue',
      ...headers,
    }),
    body,
  })
    .then(res => res.json())
}

const standardPost = (endpoint, body) => standardFetch(endpoint, {
  body: JSON.stringify(body),
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
});

function getCategories() {
  return standardFetch('categories')
    .then(({ categories }) => categories);
}

function getPosts() {
  return standardFetch('posts')
}

function createPost(params) {
  return standardPost('posts', {
    ...params,
    "id": Math.random(),
    "timestamp": Date.now(),
  });
}

function upVote(id) {
  return standardPost(`posts/${id}`, { option: 'upVote' });
}

function downVote(id) {
  return standardPost(`posts/${id}`, { option: 'downVote' });
}

export {
  createPost,
  getCategories,
  getPosts,
  upVote,
  downVote,
}