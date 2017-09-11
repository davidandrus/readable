import React from 'react';
import { bindActionCreators } from 'redux';
import sortBy from 'lodash/sortBy';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import get from 'lodash/get';

import upVotePost from '../actions/upVotePost';
import downVotePost from '../actions/downVotePost';
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
        onUpVote={actions.upVotePost}
        onDownVote={actions.downVotePost}
        onDelete={actions.deletePost}
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
  actions: bindActionCreators({
    deletePost,
    upVotePost,
    downVotePost,
  }, dispatch),
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
