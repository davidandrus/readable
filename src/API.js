const BASE_URL = 'http://localhost:5001';

function getCategories() {
  return fetch(`${BASE_URL}/categories`, {
    'method': 'GET',
    headers: new Headers({
      'authorization': 'authHeaderValue',
    }),
  })
    .then(res => res.json())
    .then(({ categories }) => categories)
}

export {
  getCategories,
}