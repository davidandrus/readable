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

const getCommonPostProps = () => ({
  id: `${Math.random()}`, //@TODO - update to use library or something
  timestamp: Date.now(),
});

const createPost = (params) => standardPost('posts', {
  ...params,
  ...getCommonPostProps(),
});

const createComment = (params) => standardPost('comments', {
  ...params,
  ...getCommonPostProps(),
});

const getCategories = () =>  standardGet('categories')
  .then(({ categories }) => categories);

const getPosts = () => standardGet('posts');
const getComments = (id) => standardGet(`posts/${id}/comments`)
  .then(comments => ({
      comments,
      post_id: id,
    }));

const editPost = (params) => standardPut(`posts/${params.id}`, params);
const deletePost = (id) => standardDelete(`posts/${id}`);
const editComment = (params) => standardPut(`comments/${params.id}`, params);
const deleteComment = (id) => standardDelete(`comments/${id}`)
  // slightly funky since comment deletion returns json payload while deleting post does not
  .then(res => res.json());
const upVote = (id) => standardPost(`posts/${id}`, { option: 'upVote' });
const downVote = (id) => standardPost(`posts/${id}`, { option: 'downVote' });

export {
  createComment,
  createPost,
  deleteComment,
  deletePost,
  editComment,
  editPost,
  getCategories,
  getComments,
  getPosts,
  upVote,
  downVote,
}