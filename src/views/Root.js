import React from 'react';
import sortBy from 'lodash/sortBy';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import upVote from '../actions/upVote';
import downVote from '../actions/downVote';
import deletePost from '../actions/deletePost';

import PostList from '../components/PostList';

function Root({ posts, actions }) {
  return (
    <div>
      <PostList
        posts={posts}
        onUpVote={actions.onUpVote}
        onDownVote={actions.onDownVote}
        onDelete={actions.onDelete}
      />
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

const mapDispatchToProps = (dispatch) => ({
  actions: {
    onDelete: id => dispatch(deletePost(id)),
    onUpVote: id => dispatch(upVote(id)),
    onDownVote: id => dispatch(downVote(id)),
  },
});

const mapStateToProps = ({ posts }) => ({
  posts: sortBy(
    posts.filter(post => !post.deleted), 
    'voteScore'
  ).reverse(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
