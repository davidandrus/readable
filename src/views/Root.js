import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { Link } from 'react-router-dom';


import PostList from '../components/PostList';

function Root({ posts }) {
  return (
    <div>
      <PostList posts={posts} />
      <Link to="/post/create">
        <Button
          type="primary" 
        >
          Add Post
        </Button>
      </Link>
    </div>
  )
}

const mapStateToProps = ({ posts }) => ({
  posts
});

export default connect(mapStateToProps)(Root);
