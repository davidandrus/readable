import React from 'react';
import { Card } from 'antd';

import EditDeleteButtons from './EditDeleteButtons';

export default function CommentsList({ comments }) {
  return (
    <div>
      {comments.map(({
        body,
        id,
        author,
        timestamp,
      }) => {
        // @TODO - break into helper since it is used multiple times
        const dateString = new Date(timestamp).toLocaleDateString('en-US');

        return (
          <Card 
            key={id}
            style={{ marginBottom: 5 }}
          >
            <div style={ {marginBottom: 20 }}>{body}</div>
            <div> 
              Posted By: <strong>{author}</strong>
            </div>
            <div style={{ marginBottom: 20 }}>
              Posted On: <strong>{dateString}</strong>
            </div>
            <EditDeleteButtons
              editUrl={`/comment/edit/${id}`}
            />
          </Card>
        );
      })}
    </div>
  );
}