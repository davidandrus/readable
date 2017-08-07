import React from 'react';
import PostTeaser from './PostTeaser';

export default function PostList({
  posts,
  onUpVote,
  onDownVote,
}) {
  return (
    <div>
      {posts.map(post => (
        <PostTeaser
          post={post}
          key={post.id}
          onUpVote={onUpVote}
          onDownVote={onDownVote}
        />
      ))}
    </div>
  )
}