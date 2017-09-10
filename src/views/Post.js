import React from 'react';
import { connect } from 'react-redux';
import find from 'lodash/find';
import get from 'lodash/get';
import sortBy from 'lodash/sortBy';
import { bindActionCreators } from 'redux';
import { Card } from 'antd';

import PostButtons from '../components/PostButtons';
import createComment from '../actions/createComment';
import deletePost from '../actions/deletePost';
import loadComments from '../actions/loadComments';
import loadPosts from '../actions/loadPosts';
import AddEditCommentForm from '../forms/AddEditCommentForm';

function Post({
  post: {
    title,
    body,
    id,
  } = {},
  comments,
  actions: {
    createComment,
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
      {comments.map(({
        body,
        id,
        author,
        timestamp,
      }) => {
        // @TODO - break into helper since it is used multiple times
        const dateString = new Date(timestamp).toLocaleDateString('en-US');

        return (
          <Card 
            key={id}
            style={{ marginBottom: 5 }}
          >
            <div style={{marginBottom: 20}}>{body}</div>
            <div>
              Posted By: <strong>{author}</strong>
            </div>
            <div>
              Posted On: <strong>{dateString}</strong>
            </div>
          </Card>
        );
      })}
      <Card title='Add a Comment'>
        <AddEditCommentForm onSubmit={comment => createComment(id, comment)} />
      </Card>
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
      createComment,
      loadComments,
      loadPosts,
      onDelete: id => deletePost(id),
    }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);