import React from 'react';
import PropTypes from 'prop-types';

import PostTeaser from './PostTeaser';

const PostList = ({
  comments,
  posts,
  onUpVote,
  onDelete,
  onDownVote,
}) => (
  <div>
    {posts.map(post => (
      <PostTeaser
        post={{
          ...post,
          comments: comments[post.id],
        }}
        key={post.id}
        onDelete={() => onDelete(post.id)}
        onUpVote={() => onUpVote(post.id)}
        onDownVote={() => onDownVote(post.id)}
      />
    ))}
  </div>
);

PostList.propTypes = {
  comments: PropTypes.object,
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
  })),
  onUpVote: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onDownVote: PropTypes.func.isRequired,
}

export default PostList;
