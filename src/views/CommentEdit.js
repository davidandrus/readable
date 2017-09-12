import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import flatten from 'lodash/flatten';
import values from 'lodash/values';
import find from 'lodash/find';

import editComment from '../actions/editComment';
import CreateEditCommentForm from '../forms/CreateEditCommentForm';

const CommentEdit = ({
  categories,
  actions: {
    editComment,
  },
  comment,
}) => (
  <div>
    <h1>Edit Comment</h1>
    <CreateEditCommentForm
      comment={comment}
      onSubmit={editComment}
      context="edit"
    />
  </div>
);

CommentEdit.propTypes = {
  actions: PropTypes.shape({
    editCommetn: PropTypes.func.isRequired,
  }).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
  comment: PropTypes.object, 
};

const mapStateToProps = ({ comments }, { match }) => {
  const commentsFlattened = flatten(values(comments));
  const { comment_id } = match.params;
  return {
    comment: find(commentsFlattened, { id: comment_id }),
  };
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ editComment }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentEdit);
