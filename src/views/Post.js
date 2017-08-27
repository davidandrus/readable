import React, { Component } from 'react';
import { connect } from 'react-redux';
import find from 'lodash/find';
import get from 'lodash/get';
import sortBy from 'lodash/sortBy';
import { bindActionCreators } from 'redux';
import { Card } from 'antd';

import PostButtons from '../components/PostButtons';
import deletePost from '../actions/deletePost';
import loadComments from '../actions/loadComments';

class Post extends Component {
  componentDidMount() {
    const {
      actions: {
        loadComments,
      }
    } = this.props;

    const post_id = get(this, 'props.post.id');
    loadComments(post_id);
  }

  render() {
    const {
      post: {
        title,
        body,
        id,
      } = {},
      comments,
      actions: {
        onDelete,
      }
    } = this.props;

    return (
      <div style={{ width: '100%' }}>
        <h1 style={{ marginBottom: 20 }}>{title}</h1>
        <div style={{ fontSize: 18, marginBottom: 30 }}>{body}</div>
        <PostButtons
          id={id}
          onDelete={onDelete}
        />
        <h2 style={{ marginBottom: 10 }} >Comments</h2>
        {comments.map(({ body }) => {
          return <Card style={{marginBottom: 5 }}>{body}</Card>
        })}
      </div>
    );
  }
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
      onDelete: id => deletePost(id),
    }, dispatch),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Post);