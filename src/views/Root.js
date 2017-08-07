import React from 'react';
import sortBy from 'lodash/sortBy';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import upVote from '../actions/upVote';
import downVote from '../actions/downVote';
import PostList from '../components/PostList';

function Root({ posts, onUpVote, onDownVote }) {
  return (
    <div>
      <PostList
        posts={posts}
        onUpVote={onUpVote}
        onDownVote={onDownVote}
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
  onUpVote: id => dispatch(upVote(id)),
  onDownVote: id => dispatch(downVote(id)),
});

const mapStateToProps = ({ posts }) => ({
  posts: sortBy(posts, 'voteScore').reverse(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
