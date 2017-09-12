import uuid from 'uuid/v1';

const BASE_URL = 'http://localhost:3001';

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
  id: uuid(),
  timestamp: Date.now(),
});

const getCategories = () => standardGet('categories')
  .then(({ categories }) => categories);

const getPosts = () => standardGet('posts');
const getComments = (id) => standardGet(`posts/${id}/comments`)
  .then(comments => ({
      comments,
      post_id: id,
    }));

const createPost = (params) => standardPost('posts', {
  ...params,
  ...getCommonPostProps(),
});
const editPost = (params) => standardPut(`posts/${params.id}`, params);
const deletePost = (id) => standardDelete(`posts/${id}`);
const upVotePost = (id) => standardPost(`posts/${id}`, { option: 'upVote' });
const downVotePost = (id) => standardPost(`posts/${id}`, { option: 'downVote' });

const createComment = (params) => standardPost('comments', {
  ...params,
  ...getCommonPostProps(),
});
const editComment = (params) => standardPut(`comments/${params.id}`, params);
const deleteComment = (id) => standardDelete(`comments/${id}`)
  // slightly funky since comment deletion returns json payload while deleting post does not
  .then(res => res.json());
const upVoteComment = (id) => standardPost(`comments/${id}`, { option: 'upVote' });
const downVoteComment = (id) => standardPost(`comments/${id}`, { option: 'downVote' });

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
  upVoteComment,
  upVotePost,
  downVoteComment,
  downVotePost,
}
