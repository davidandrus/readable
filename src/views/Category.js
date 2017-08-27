import React from 'react';
import sortBy from 'lodash/sortBy';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import get from 'lodash/get';

import upVote from '../actions/upVote';
import downVote from '../actions/downVote';
import deletePost from '../actions/deletePost';

import PostList from '../components/PostList';

function Category({
  posts,
  comments,
  actions,
}) {
  return (
    <div>
      <PostList
        comments={comments}
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

const mapStateToProps = ({ posts, comments }, { match }) => {
  const category = get(match, 'params.category');

  return {
    posts: sortBy(
      posts
        .filter(post => !post.deleted)
         // filter by category if viewing category page
        .filter(post => category ? category === post.category : true),
      'voteScore'
    ).reverse(),
    comments,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
