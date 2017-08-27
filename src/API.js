const BASE_URL = 'http://localhost:5001';

const standardRequest = (endpoint, options = {}) => {
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
}

const standardGet = (endpoint, options) => standardRequest(endpoint, {
  'headers': { 'Content-Type': 'application/json' },
}).then(res => res.json())

const standardPost = (endpoint, body) => standardRequest(endpoint, {
  body: JSON.stringify(body),
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
}).then(res => res.json());

const standardPut = (endpoint, body) => standardRequest(endpoint, {
  body: JSON.stringify(body),
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
}).then(res => res.json());

const standardDelete = (endpoint, id) => standardRequest(endpoint, {
  method: 'DELETE',
  headers: { 'Content-Type': 'application/text' },
});

function getCategories() {
  return standardGet('categories')
    .then(({ categories }) => categories);
}

function getPosts() {
  return standardGet('posts')
}

function createPost(params) {
  return standardPost('posts', {
    ...params,
    id: `${Math.random()}`,
    timestamp: Date.now(),
  });
}

const editPost = (id, params) => standardPut(`posts/${id}`, params);
const deletePost = (id) => standardDelete(`posts/${id}`);
const upVote = (id) => standardPost(`posts/${id}`, { option: 'upVote' });
const downVote = (id) => standardPost(`posts/${id}`, { option: 'downVote' });

export {
  createPost,
  deletePost,
  editPost,
  getCategories,
  getPosts,
  upVote,
  downVote,
}