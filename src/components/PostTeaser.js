import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

import EditDeleteButtons from './EditDeleteButtons';
import PostDetails from './PostDetails';
import VoteControl from './VoteControl';

const WRAPPER_STYLE = {
  display: 'flex',
  marginBottom: 20,
  marginLeft: -20,
};
const VOTE_CONTROL_WRAPPER_STYLE = {
  alignItems: 'center',
  display: 'flex', 
  flex: '0 0 75px', 
  flexDirection: 'column', 
  fontSize: 30,
};
const POST_WRAPPER_STYLE = {
  flex: '1 1 20000px',
};
const POST_BODY_WRAPPER_STYLE = {
  display: 'flex',
  flexDirection: 'column',
};
const POST_BODY_STYLE = {
  marginBottom: 20,
};

const PostTeaser = ({
  onDelete,
  onDownVote,
  onUpVote,
  post,
}) => {
  const {
    body,
    category,
    id,
    title,
    voteScore,
  } = post;

  const titleElem = <Link to={`/${category}/${id}`}>{title}</Link>;

  return (
    <div style={WRAPPER_STYLE}>
      <div style={VOTE_CONTROL_WRAPPER_STYLE}>
        <VoteControl
          onUpVote={onUpVote}
          onDownVote={onDownVote}
          voteScore={voteScore}
        />
      </div>
      <div style={POST_WRAPPER_STYLE}>
        <Card title={titleElem}>
          <div style={POST_BODY_WRAPPER_STYLE}>
            <div style={POST_BODY_STYLE}>
              {body}
            </div>
            <PostDetails post={post} />
            <EditDeleteButtons
              editUrl={`/post/edit/${id}`}
              id={id}
              onDelete={onDelete}
            />
          </div>
        </Card>
      </div>
    </div>
  )
}

PostTeaser.propTypes = {
  onDownVote: PropTypes.func,
  onUpVote: PropTypes.func,
  post: PropTypes.shape({
    body: PropTypes.string,
    category: PropTypes.string,
    id: PropTypes.string,
    title: PropTypes.string,
    voteScore: PropTypes.number,
  }),
};

export default PostTeaser;
