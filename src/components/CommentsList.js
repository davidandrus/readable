import React from 'react';
import { Card } from 'antd';


import { formatDate } from '../helpers';
import EditDeleteButtons from './EditDeleteButtons';

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
          </Card>
        );
      })}
    </div>
  );
}