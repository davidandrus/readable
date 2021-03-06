import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

import { formatDate } from '../helpers';
import EditDeleteButtons from './EditDeleteButtons';
import VoteControl from '../components/VoteControl';

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

const BODY_WRAPPER_STYLE = {
  flex: '1 1 auto',
  marginBottom: -24, // ant style override
};

const CommentsList =({
  comments,
  onDeleteComment,
  onUpVoteComment,
  onDownVoteComment,
}) => (
  <div>
    {comments.map(({
      body,
      id,
      author,
      timestamp,
      voteScore,
    }) => {
      return (
        <Card 
          id={id}
          key={id}
          style={{ marginBottom: 5 }}
        >
          <div style={WRAPPER_STYLE}>
            <div style={VOTE_CONTROL_WRAPPER_STYLE}>
            <VoteControl
              onUpVote={() => onUpVoteComment(id)}
              onDownVote={() => onDownVoteComment(id)}
              voteScore={voteScore}
            />
            </div>
            <div style={BODY_WRAPPER_STYLE}>
              <div style={ {marginBottom: 20 }}>{body}</div>
              <div> 
                Posted By: <strong>{author}</strong>
              </div>
              <div style={{ marginBottom: 20 }}>
                Posted: <strong>{formatDate(timestamp)}</strong>
              </div>
              <EditDeleteButtons
                id={id}
                onDelete={() => onDeleteComment(id)}
                editUrl={`/comment/edit/${id}`}
              />
            </div>
          </div>
        </Card>
      );
    })}
  </div>
);

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object),
  onDeleteComment: PropTypes.func.isRequired,
  onUpVoteComment: PropTypes.func.isRequired,
  onDownVoteComment: PropTypes.func.isRequired,
};

export default CommentsList;
