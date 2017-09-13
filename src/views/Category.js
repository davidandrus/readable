import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Button,
  Select,
} from 'antd';
import { Link } from 'react-router-dom';
import sortBy from 'lodash/sortBy';
import get from 'lodash/get';

import upVotePost from '../actions/upVotePost';
import downVotePost from '../actions/downVotePost';
import deletePost from '../actions/deletePost';
import setSort from '../actions/setSort';
import PostList from '../components/PostList';

const { Option } = Select;

const TITLE_STYLE = {
  marginBottom: 20,
};
const SORT_WRAPPER_STYLE = {
  fontSize: 12,
  marginBottom: 20,
};
const SORT_LABEL_STYLE = {
  marginRight: 5,
};
const NO_POSTS_STYLE = {
  marginBottom: 20,
};

const Category = ({
  category,
  posts,
  comments,
  actions: {
    setSort,
    upVotePost,
    downVotePost,
    deletePost,
  },
  sort,
}) => (
  <div>
    <h1 style={TITLE_STYLE}>{category ? `Posts in: ${category}` : 'All Posts'}</h1>
    {posts.length > 0 && (
      <div style={SORT_WRAPPER_STYLE}>
        <span style={SORT_LABEL_STYLE}>Sort By:</span>
        <Select
          defaultValue={sort}
          onChange={setSort}
          size="large"
        >
          <Option value="timestamp">Date Posted</Option>
          <Option value="voteScore">Vote Score</Option>
        </Select>
      </div>
    )}
    {posts.length > 0 && (
      <PostList
        comments={comments}
        posts={posts}
        onUpVote={upVotePost}
        onDownVote={downVotePost}
        onDelete={deletePost}
      />
    )}
    {!posts.length && (
      <h2 style={NO_POSTS_STYLE}>No Posts Yet</h2>
    )}
    <Link to="/post/create">
      <Button
        type="primary" 
      >
        Add Post
      </Button>
    </Link>
  </div>
);

Category.propTypes = {
  category: PropTypes.string,
  posts: PropTypes.arrayOf(PropTypes.object),
  comments: PropTypes.object,
  actions: PropTypes.shape({
    setSort: PropTypes.func.isRequired,
    upVotePost: PropTypes.func.isRequired,
    downVotePost: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
  }).isRequired,
  sort: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    deletePost,
    downVotePost,
    setSort,
    upVotePost,
  }, dispatch),
});

const mapStateToProps = ({
  categories,
  comments,
  posts,
  sort
}, { match }) => {
  const category = get(match, 'params.category');
  const postsFiltered =  posts
    // filter by category if viewing category page
    .filter(post => category ? category === post.category : true);

  const postsSorted = sort === 'voteScore'
    ? sortBy(postsFiltered, 'voteScore' ).reverse()
    : sortBy(postsFiltered, 'timestamp').reverse();

  return {
    category,
    comments,
    posts: postsSorted,
    sort,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
