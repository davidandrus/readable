import React from 'react';
import { connect } from 'react-redux';
import find from 'lodash/find';
import get from 'lodash/get';
import sortBy from 'lodash/sortBy';
import { bindActionCreators } from 'redux';
import { Card } from 'antd';

import EditDeleteButtons from '../components/EditDeleteButtons';
import CommentsList from '../components/CommentsList';
import createComment from '../actions/createComment';
import deletePost from '../actions/deletePost';
import deleteComment from '../actions/deleteComment';
import loadComments from '../actions/loadComments';
import loadPosts from '../actions/loadPosts';
import CreateEditCommentForm from '../forms/CreateEditCommentForm';

function Post({
  post: {
    title,
    body,
    id,
  } = {},
  comments,
  actions: {
    createComment,
    deleteComment,
    deletePost,
  }
}) {
  return (
    <div style={{ width: '100%' }}>
      <h1 style={{ marginBottom: 20 }}>{title}</h1>
      <div style={{ fontSize: 18, marginBottom: 30 }}>{body}</div>
      <div style={{marginBottom: 20}}>
        <EditDeleteButtons
          editUrl={`/post/edit/${id}`}
          id={id}
          onDelete={deletePost}
        />
      </div>
      <h2 style={{ marginBottom: 10 }} >Comments</h2>
      <CommentsList 
        comments={comments}
        onDeleteComment={deleteComment}
      />
      <Card title='Add a Comment'>
        <CreateEditCommentForm
          context="create"
          onSubmit={comment => createComment(id, comment)} />
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
      deletePost,
      deleteComment,
    }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);