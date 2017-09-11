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
import { Select } from 'antd';
const { Option } = Select;

const TITLE_STYLE = { marginBottom: 20 }
const SORT_WRAPPER_STYLE = {
  fontSize: 12,
  marginBottom: 20,
}
const SORT_LABEL_STYLE = {
  marginRight: 5,
};
const NO_POSTS_STYLE = {
  marginBottom: 20,
};

function Category({
  category,
  posts,
  comments,
  actions,
}) {
  return (
    <div>
      <h1 style={TITLE_STYLE}>{category ? `Posts in: ${category}` : 'All Posts'}</h1>
      {posts.length 
        ? (
          <div style={SORT_WRAPPER_STYLE}>
            <span style={SORT_LABEL_STYLE}>Sort By:</span>
            <Select defaultValue="timestamp" size="large">
              <Option value="timestamp">Date Posted</Option>
              <Option value="voteScore">Vote Score</Option>
            </Select>
          </div>
        )
        : undefined
      }
      {posts.length 
        ? (
          <PostList
            comments={comments}
            posts={posts}
            onUpVote={actions.upVotePost}
            onDownVote={actions.downVotePost}
            onDelete={actions.deletePost}
          />
        )
        : <h2 style={NO_POSTS_STYLE}>No Posts Found</h2>
      }
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

const mapStateToProps = ({ posts, comments, categories }, { match }) => {
  const category = get(match, 'params.category');

  return {
    category,
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
