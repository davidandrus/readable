import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import find from 'lodash/find';
import get from 'lodash/get';
import sortBy from 'lodash/sortBy';
import { bindActionCreators } from 'redux';
import { Card } from 'antd';

import EditDeleteButtons from '../components/EditDeleteButtons';
import CommentsList from '../components/CommentsList';
import VoteControl from '../components/VoteControl';
import createComment from '../actions/createComment';
import deletePost from '../actions/deletePost';
import deleteComment from '../actions/deleteComment';
import loadComments from '../actions/loadComments';
import loadPosts from '../actions/loadPosts';
import upVoteComment from '../actions/upVoteComment';
import upVotePost from '../actions/upVotePost';
import downVoteComment from '../actions/downVoteComment';
import downVotePost from '../actions/downVotePost';
import CreateEditCommentForm from '../forms/CreateEditCommentForm';

const WRAPPER_STYLE = {
  display: 'flex',
  width: '100%',
};
const VOTE_WRAPPER_STYLE = {
  alignItems: 'center',
  display: 'flex',
  flex: '0 0 75px',
  flexDirection: 'column',
  marginLeft: -20,
};
const POST_WRAPPER_STYLE = {
  flex: '1 1 auto',
};
const TITLE_STYLE = {
  marginBottom: 20,
};
const BODY_STYLE = {
  fontSize: 18,
  marginBottom: 30,
};
const BUTTON_WRAPPER_STYLE = {
  marginBottom: 20,
};
const COMMENT_TITLE_STYLE = {
  marginBottom: 20,
};

const Post = ({
  post: {
    title,
    body,
    id,
    voteScore,
  } = {},
  comments,
  actions: {
    createComment,
    deleteComment,
    deletePost,
    upVoteComment,
    upVotePost,
    downVoteComment,
    downVotePost,
  }
}) => {
  return (
    <div style={WRAPPER_STYLE}>
      <div style={VOTE_WRAPPER_STYLE}>
        <VoteControl
          onUpVote={() => upVotePost(id)}
          onDownVote={() => downVotePost(id)}
          voteScore={voteScore}
        />
      </div>
      <div style={POST_WRAPPER_STYLE}>
        <h1 style={TITLE_STYLE}>{title}</h1>
        <div style={BODY_STYLE}>{body}</div>
        <div style={BUTTON_WRAPPER_STYLE}>
          <EditDeleteButtons
            editUrl={`/post/edit/${id}`}
            id={id}
            onDelete={deletePost}
          />
        </div>
        <h2 style={COMMENT_TITLE_STYLE} >Comments</h2>
        <CommentsList 
          comments={comments}
          onDeleteComment={deleteComment}
          onUpVoteComment={upVoteComment}
          onDownVoteComment={downVoteComment}
        />
        <Card title='Add a Comment'>
          <CreateEditCommentForm
            context="create"
            onSubmit={comment => createComment(id, comment)}
          />
        </Card>
      </div>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    id: PropTypes.string,
    voteScore: PropTypes.number,
  }),
  comments: PropTypes.arrayOf(PropTypes.object),
  actions: PropTypes.shape({
    createComment: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
    upVoteComment: PropTypes.func.isRequired,
    upVotePost: PropTypes.func.isRequired,
    downVoteComment: PropTypes.func.isRequired,
    downVotePost: PropTypes.func.isRequired,
  }),
};

const mapStateToProps = ({ posts, comments }, { match }) => {
  const { post_id } = match.params;

  return {
    post: find(posts, { id: post_id }), 
    comments: sortBy(get(comments, post_id, []), 'voteScore').reverse(),
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ 
    createComment,
    deletePost,
    deleteComment,
    downVoteComment,
    downVotePost,
    loadComments,
    loadPosts,
    upVoteComment,
    upVotePost,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
