import React from 'react';
import { connect } from 'react-redux';
import find from 'lodash/find';
import get from 'lodash/get';
import sortBy from 'lodash/sortBy';
import { bindActionCreators } from 'redux';
import { Card } from 'antd';

import PostButtons from '../components/PostButtons';
import deletePost from '../actions/deletePost';
import loadComments from '../actions/loadComments';
import loadPosts from '../actions/loadPosts';

function Post({
  post: {
    title,
    body,
    id,
  } = {},
  comments,
  actions: {
    onDelete,
  }
}) {
  return (
    <div style={{ width: '100%' }}>
      <h1 style={{ marginBottom: 20 }}>{title}</h1>
      <div style={{ fontSize: 18, marginBottom: 30 }}>{body}</div>
      <div style={{marginBottom: 20}}>
        <PostButtons
          id={id}
          onDelete={onDelete}
        />
      </div>
      <h2 style={{ marginBottom: 10 }} >Comments</h2>
      {comments.map(({ body }) => {
        return <Card style={{marginBottom: 5 }}>{body}</Card>
      })}
    </div>
  );
}

function mapStateToProps({ posts, comments }, { match }) {
  const { post_id } = match.params;

  return {
    post: find(posts, { id: post_id }), 
    comments: sortBy(get(comments, post_id, []), 'timestamp'),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ 
      loadComments,
      loadPosts,
      onDelete: id => deletePost(id),
    }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);