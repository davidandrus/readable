import React from 'react';
import PostTeaser from './PostTeaser';

export default function PostList({
  comments,
  posts,
  onUpVote,
  onDelete,
  onDownVote,
}) {
  return (
    <div>
      {posts.map(post => (
        <PostTeaser
          post={{
            ...post,
            comments: comments[post.id],
          }}
          key={post.id}
          onDelete={onDelete}
          onUpVote={onUpVote}
          onDownVote={onDownVote}
        />
      ))}
    </div>
  )
}