const BASE_URL = 'http://localhost:5001';

const standardFetch = (endpoint, method = 'GET') => (
  fetch(`${BASE_URL}/${endpoint}`, {
    method,
    headers: new Headers({
      'authorization': 'authHeaderValue',
    }),
  })
    .then(res => res.json())
)

function getCategories() {
  return standardFetch('categories')
    .then(({ categories }) => categories);
}

function getPosts() {
  return standardFetch('posts')
}

export {
  getCategories,
  getPosts,
}