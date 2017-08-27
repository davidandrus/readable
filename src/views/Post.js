import React, { Component } from 'react';
import { connect } from 'react-redux';
import find from 'lodash/find';
import get from 'lodash/get';
import { bindActionCreators } from 'redux';

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
      } = {},
      comments,
    } = this.props;

    return (
      <div>
        <h1 style={{ marginBottom: 20 }}>{title}</h1>
        <div style={{ fontSize: '15px' }}>
          {body}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ posts, comments }, { match }) {
  const { post_id } = match.params;

  return {
    post: find(posts, { id: post_id }), 
    comments: get(comments, post_id, [])
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ loadComments }, dispatch),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Post);