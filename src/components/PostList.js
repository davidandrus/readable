import React from 'react';
import PostTeaser from './PostTeaser';

export default function PostList({
  posts,
  onUpVote,
  onDelete,
  onDownVote,
}) {
  return (
    <div>
      {posts.map(post => (
        <PostTeaser
          post={post}
          key={post.id}
          onDelete={onDelete}
          onUpVote={onUpVote}
          onDownVote={onDownVote}
        />
      ))}
    </div>
  )
}