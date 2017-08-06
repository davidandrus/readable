import React from 'react';
import PostTeaser from './PostTeaser';

export default function PostList({ posts }) {
  return (
    <div>
      {posts.map(post => <PostTeaser key={post.id} {...post} />)}
    </div>
  )
}