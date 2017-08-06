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

function getCategories() {
  return standardFetch('categories')
    .then(({ categories }) => categories);
}

function getPosts() {
  return standardFetch('posts')
}

function createPost(params) {
  return standardFetch('posts', {
    method: 'POST',
    body: JSON.stringify(params),
    headers: { 'Content-Type': 'application/json' }
  });
}

export {
  createPost,
  getCategories,
  getPosts,
}