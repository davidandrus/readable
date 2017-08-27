import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import createPost from '../actions/createPost';
import CreateEditPostForm from '../forms/CreateEditPostForm';

function PostCreate({ categories, actions }) {
  return (
    <div>
      <h1>Create Post</h1>
      <CreateEditPostForm
        categories={categories}
        onSubmit={actions.createPost}
        context="create"
      />
    </div>
  );
}

PostCreate.propTypes = {
  categories: PropTypes.array,
  actions: PropTypes.object,
}

function mapStateToProps({ categories }) {
  return { categories };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ createPost }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostCreate);
