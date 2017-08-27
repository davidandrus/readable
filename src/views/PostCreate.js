import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import createPost from '../actions/createPost';
import CreatePostForm from '../forms/CreatePostForm';

function PostCreate({ categories, actions }) {
  return (
    <div>
      <h1>Create Post</h1>
      <CreatePostForm
        categories={categories}
        onSubmit={actions.createPost}
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
