import React from 'react';
import { connect } from 'react-redux';
import PostList from '../components/PostList';

function Root({ posts }) {
  return (
    <div>
      <PostList posts={posts} />
    </div>
  )
}

const mapStateToProps = ({ posts }) => ({
  posts,
});

export default connect(mapStateToProps)(Root)
