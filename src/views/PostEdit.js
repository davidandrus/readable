import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import find from 'lodash/find';

import editPost from '../actions/editPost';
import CreateEditPostForm from '../forms/CreateEditPostForm';

function PostEdit({ categories, actions, post }) {
  return ( 
    <div>
      <h1>Edit Post</h1>
      <CreateEditPostForm
        categories={categories}
        onSubmit={(params) => actions.editPost(params.id, params)}
        post={post}
        context="edit"
      />
    </div>
  );
}

PostEdit.propTypes = {
  categories: PropTypes.array,
  actions: PropTypes.object,
}

function mapStateToProps({ categories, posts, router }, { match }) {
  const { post_id } = match.params;
  return {
    categories,
    post: find(posts, { id: post_id }),
   };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ editPost }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit);
