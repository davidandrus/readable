import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

import PostList from '../components/PostList';

function Root({ posts }) {
  return (
    <div>
      <PostList posts={posts} />
      <Button
        type="primary" 
      >
        Add Post
      </Button>
    </div>
  )
}

const mapStateToProps = ({ posts }) => ({
  posts
});

export default connect(mapStateToProps)(Root);
