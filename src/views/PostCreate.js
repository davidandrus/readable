import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import createPost from '../actions/createPost';
import CreateEditPostForm from '../forms/CreateEditPostForm';

const PostCreate = ({
  categories,
  actions: {
    createPost,
  },
}) => (
  <div>
    <h1>Create Post</h1>
    <CreateEditPostForm
      categories={categories}
      onSubmit={createPost}
      context="create"
    />
  </div>
);

PostCreate.propTypes = {
  categories: PropTypes.array,
  actions: PropTypes.shape({
    createPost: PropTypes.func.isRequired
  }).isRequired,
};

const mapStateToProps = ({ categories }) => ({ categories });

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ createPost }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostCreate);
