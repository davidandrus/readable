import React from 'react';
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

export default function CommentsList({
  comments,
  actions,
  onDeleteComment,
}) {
  return (
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
                onUpVote={() => {}}
                onDownVote={() => {}}
                voteScore={voteScore}
              />
              </div>
              <div style={BODY_WRAPPER_STYLE}>
                <div style={ {marginBottom: 20 }}>{body}</div>
                <div> 
                  Posted By: <strong>{author}</strong>
                </div>
                <div> 
                  Vote Score: <strong>{voteScore}</strong>
                </div>
                <div style={{ marginBottom: 20 }}>
                  Posted: <strong>{formatDate(timestamp)}</strong>
                </div>
                <EditDeleteButtons
                  id={id}
                  onDelete={onDeleteComment}
                  editUrl={`/comment/edit/${id}`}
                />
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}