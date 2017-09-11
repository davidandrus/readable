import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import flatten from 'lodash/flatten';
import values from 'lodash/values';
import find from 'lodash/find';

import editComment from '../actions/editComment';
import CreateEditCommentForm from '../forms/CreateEditCommentForm';

function CommentEdit({ categories, actions, comment }) {
  return (
    <div>
      <h1>Edit Comment</h1>
      <CreateEditCommentForm
        comment={comment}
        onSubmit={actions.editComment}
        context="edit"
      />
    </div>
  );
}

CommentEdit.propTypes = {
  actions: PropTypes.object,
}

function mapStateToProps({ comments }, { match }) {
  const commentsFlattened = flatten(values(comments));
  const { comment_id } = match.params;
  return {
    comment: find(commentsFlattened, { id: comment_id }),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ editComment }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentEdit);
